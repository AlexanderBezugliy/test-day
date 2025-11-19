import React from 'react'
import Cards from './Cards'



const ProductCards = () => {

    return (
        <div className='w-full my-[35px] bg-[#F8F8F8]'>
            <div className='flex pb-[72px]'>
                <button className='flex-1 py-[11px] uppercase'>
                    Home baker
                </button>
                <button className='flex-1 py-[11px] bg-[#E8E8E8] rounded-bl-xl uppercase'>
                    Professional
                </button>
            </div>

                
            <Cards />
        </div>
    )

}

export default ProductCards
