import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full font-medium h-[3vh] items-center fixed z-[100000] bg-[#F1EDE7] text-[#161618] flex justify-between px-[1vw]'>

        <div className='font-bold tracking-[-0.2vw]'>LG</div>

        <div className='flex text-[0.8vw] gap-[2vw]'>
            <div>Works</div>
            <div>Solutions</div>
            <div>Design</div>
        </div>

        <div>
            Menu
        </div>
    </div>
  )
}

export default Navbar