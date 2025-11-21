import React from 'react'

const Title = ({ leftTitle, rightTitle, subTitle }) => {
    return (
        <div className='flex flex-col items-center mb-[49px]'>
            <h2 className=' text-[40px] font-extralight uppercase'>{leftTitle}<span className='text-yellow-400 font-normal italic'> {rightTitle}</span> </h2>
            <p className='text-[20px] text-center font-light mt-[16px]'>{subTitle}</p>
        </div>
    )
}

export default Title
