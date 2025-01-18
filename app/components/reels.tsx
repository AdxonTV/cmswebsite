import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface Story {
  profileName: string;
  title: string[];
  storyImg: string;
  profileImg: string;
  linkLabel: string;
  linkSrc: string;
}

interface StoryProps {
  stories: Story[];
}

const InstagramStories: React.FC<StoryProps> = ({ stories }) => {
  const [activeStory, setActiveStory] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const storyTimeout = useRef<NodeJS.Timeout | null>(null);

  const storyDuration = 4000;
  const contentUpdateDelay = 0.4;

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorTextRef = useRef<HTMLParagraphElement | null>(null);
  
  const profileNameRef = useRef<HTMLDivElement | null>(null);
  const titleRowsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);

  const storyImgRef = useRef<HTMLDivElement | null>(null);
  const profileImgRef = useRef<HTMLImageElement | null>(null);
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const resetIndexHighlight = (index: number, currentDirection: "next" | "prev") => {
    const highlight = document.querySelectorAll(".index .index-highlight")[index] as HTMLElement;
    gsap.killTweensOf(highlight);
    gsap.to(highlight, {
      width: currentDirection === "next" ? "100%" : "0%",
      duration: 0.3,
      onStart: () => {
        gsap.to(highlight, {
          transformOrigin: "right center",
          scaleX: 0,
          duration: 0.3,
        });
      },
    });
  };

  const animateIndexHighlight = (index: number) => {
    const highlight = document.querySelectorAll(".index .index-highlight")[index] as HTMLElement;
    gsap.set(highlight, {
      width: "0%",
      scaleX: 1,
      transformOrigin: "right center",
    });
    gsap.to(highlight, {
      width: "100%",
      duration: storyDuration / 1000,
      ease: "none",
    });
  };

  const animateNewImage = (imgContainer: HTMLElement, currentDirection: "next" | "prev") => {
    gsap.set(imgContainer, {
      clipPath:
        currentDirection === "next"
          ? "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)"
          : "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    });
    gsap.to(imgContainer, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power4.inOut",
    });
  };

  const animateImageScale = (currentImg: HTMLElement, upcomingImg: HTMLElement, currentDirection: "next" | "prev") => {
    gsap.fromTo(
      currentImg,
      { scale: 1, rotate: 0 },
      {
        scale: 2,
        rotate: currentDirection === "next" ? -25 : 25,
        duration: 1,
        ease: "power4.inOut",
        onComplete: () => {
          currentImg.parentElement?.remove();
        },
      }
    );
    gsap.fromTo(
      upcomingImg,
      { scale: 2, rotate: currentDirection === "next" ? 25 : -25 },
      { scale: 1, rotate: 0, duration: 1, ease: "power4.inOut" }
    );
  };

  const cleanUpElements = () => {
    const profileNameDiv = profileNameRef.current;
    const titleRows = titleRowsRef.current;

    if (profileNameDiv) {
      while (profileNameDiv.childElementCount > 2) {
        profileNameDiv.removeChild(profileNameDiv.firstChild!);
      }
    }

    titleRows?.forEach((titleRow) => {
      while (titleRow.childElementCount > 2) {
        titleRow.removeChild(titleRow.firstChild!);
      }
    });
  };

  const changeStory = (isAutomatic: boolean = true) => {
    const previousStory = activeStory;
    const currentDirection = isAutomatic ? "next" : direction;

    if (currentDirection === "next") {
      setActiveStory((activeStory + 1) % stories.length);
    } else {
      setActiveStory((activeStory - 1 + stories.length) % stories.length);
    }

    const story = stories[activeStory];

    gsap.to(".profile-name p", {
      y: currentDirection === "next" ? -24 : 24,
      duration: 0.5,
      delay: contentUpdateDelay,
    });
    gsap.to(".title-row h1", {
      y: currentDirection === "next" ? -48 : 48,
      duration: 0.5,
      delay: contentUpdateDelay,
    });

    const currentImgContainer = storyImgRef.current?.querySelector(".img")!;
    const currentImg = currentImgContainer.querySelector("img");

    setTimeout(() => {
      const newProfileName = document.createElement("p");
      newProfileName.innerText = story.profileName;
      newProfileName.style.transform =
        currentDirection === "next" ? "translateY(24px)" : "translateY(-24px)";

      profileNameRef.current?.appendChild(newProfileName);

      gsap.to(newProfileName, {
        y: 0,
        duration: 0.5,
        delay: contentUpdateDelay,
      });

      const titleRows = titleRowsRef.current!;
      story.title.forEach((line, index) => {
        if (titleRows[index]) {
          const newTitle = document.createElement("h1");
          newTitle.innerText = line;
          newTitle.style.transform =
            currentDirection === "next"
              ? "translateY(48px)"
              : "translateY(-48px)";
          titleRows[index].appendChild(newTitle);

          gsap.to(newTitle, {
            y: 0,
            duration: 0.5,
            delay: contentUpdateDelay,
          });
        }
      });

      const newImgContainer = document.createElement("div");
      newImgContainer.classList.add("img");
      const newStoryImg = document.createElement("img");
      newStoryImg.src = story.storyImg;
      newStoryImg.alt = story.profileName;
      newImgContainer.appendChild(newStoryImg);

      storyImgRef.current?.appendChild(newImgContainer);

      animateNewImage(newImgContainer, currentDirection);

      const upcomingImg = newStoryImg;
      animateImageScale(currentImg, upcomingImg, currentDirection);

      resetIndexHighlight(previousStory, currentDirection);
      animateIndexHighlight(activeStory);

      cleanUpElements();

      clearTimeout(storyTimeout.current!);
      storyTimeout.current = setTimeout(() => changeStory(true), storyDuration);
    }, 200);

    setTimeout(() => {
      if (profileImgRef.current) {
        profileImgRef.current.src = story.profileImg;
      }

      if (linkRef.current) {
        linkRef.current.textContent = story.linkLabel;
        linkRef.current.href = story.linkSrc;
      }
    }, 600);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX } = event;
      const viewportWidth = window.innerWidth;

      if (cursorTextRef.current) {
        if (clientX < viewportWidth / 2) {
          cursorTextRef.current.textContent = "Prev";
          setDirection("prev");
        } else {
          cursorTextRef.current.textContent = "Next";
          setDirection("next");
        }
      }

      if (cursorRef.current) {
        const { offsetWidth, offsetHeight } = cursorRef.current;
        gsap.to(cursorRef.current, {
          x: clientX - offsetWidth / 2,
          y: event.clientY - offsetHeight / 2,
          ease: "power2.out",
          duration: 0.3,
        });
      }
    };

    const handleClick = () => {
      clearTimeout(storyTimeout.current!);
      resetIndexHighlight(activeStory, direction);
      changeStory(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    storyTimeout.current = setTimeout(() => changeStory(true), storyDuration);
    animateIndexHighlight(activeStory);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
      clearTimeout(storyTimeout.current!);
    };
  }, [activeStory, direction]);

  return (
    <div className=" z-50 bg-black">
      <div ref={cursorRef} className="cursor">
        <p ref={cursorTextRef}></p>
      </div>

      <div ref={storyImgRef} className="story-img">
        <div className="img">
          <img src={stories[activeStory].storyImg} alt={stories[activeStory].profileName} />
        </div>
      </div>

      <div className="story-content">
        <div className="row">
          <div className="indices">
            {stories.map((_, index) => (
              <div key={index} className="index">
                <div className="index-highlight"></div>
              </div>
            ))}
          </div>

          <div className="profile">
            <div ref={profileImgRef} className="profile-icon">
              <img src={stories[activeStory].profileImg} alt={stories[activeStory].profileName} />
            </div>
            <div ref={profileNameRef} className="profile-name">
              <p>{stories[activeStory].profileName}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="title">
            {stories[activeStory].title.map((line, index) => (
              <div key={index} className="title-row">
                <h1>{line}</h1>
              </div>
            ))}
          </div>

          <div className="link">
            <a ref={linkRef} href={stories[activeStory].linkSrc} target="_blank">
              {stories[activeStory].linkLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramStories;