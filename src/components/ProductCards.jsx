import React from 'react'
import CardsSlick from './CardsSlick'



const ProductCards = () => {

    return (
        <div className='relative w-full my-[35px] pb-[70px] md:pb-[140px] bg-[#F8F8F8]'>
            <div className='flex pb-[72px]'>
                <button className='flex-1 py-[11px] uppercase'>
                    Home baker
                </button>
                <button className='flex-1 py-[11px] bg-[#E8E8E8] rounded-bl-xl uppercase'>
                    Professional
                </button>

                {/* flag */}
                <img src="/big-flag.png" alt="flag" className='absolute right-25 md:right-70 -bottom-15 w-35 h-auto md:w-[183px] object-cover' />
            </div>

            {/* cards */}
            <CardsSlick />
        </div>
    )

}

export default ProductCards
