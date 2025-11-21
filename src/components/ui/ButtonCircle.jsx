import React from 'react'


const ButtonCircle = ({ title }) => {
    return (
        <button className='text-[#F4C22F] font-medium uppercase'>
            {title}

            <img src="/orange-arrow-right.png" alt="orange-arrow-right" className='inline ml-2 mb-[3px]  object-cover' />
            <img src="/orange-circle.png" alt="orange-circle" className='inline -ml-9' />
        </button>
    )
}

export default ButtonCircle;
