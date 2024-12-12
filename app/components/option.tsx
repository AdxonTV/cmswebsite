import React from 'react'
interface LabeledValue {
    text: string;
  }
const Option:React.FC<LabeledValue> = ({text}) => {
  return (
  
    <div className='mb-[0.8vw] font-bold'>
      <div className="flex w-[20vw]   text-[1.3vw] justify-between h-[4vh] items-center">
        <div className="w-[20vw]  mb-[1vh]">{text}</div>{" "}
        <div className=" w-[1vw] h-[1vw] ">   <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24"><path d="M17 13H8.414l4.293-4.293-1.414-1.414L4.586 14l6.707 6.707 1.414-1.414L8.414 15H19V4h-2v9z"/></svg></div>
      </div>
      <div className="w-[20vw] bg-black h-[0.5px]"></div>
    </div>

  )
}

export default Option