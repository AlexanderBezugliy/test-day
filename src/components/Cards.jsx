import React, { useRef, useState } from 'react'
import { cardData } from '../assets/script';
import StarRating from './ui/StarRating';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";



const Cards = () => {
    const [currentPage, setCurrentPage] = useState(0); 

    const scrollRef = useRef(null);
    
    const totalPages = Math.ceil(cardData.length / 4);


    const getCurrentCards = () => {
        const startIndex = currentPage * 4;
        const endIndex = startIndex + 4;

        return cardData.slice(startIndex, endIndex);
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    const cardsToDisplay = getCurrentCards()


    return (
        <div className='relative max-w-425 mx-auto'>
            {/* arrows */}
            <button 
                onClick={handleNext}
                className="absolute -left-[75px] top-1/2 transform -translate-y-1/2 hover:scale-110 duration-300 cursor-pointer"
            >
                <IoIosArrowDropleft size={45} color='gray' />
            </button>

            <button 
                onClick={handlePrev}
                className="absolute -right-[75px] top-1/2 transform -translate-y-1/2 hover:scale-110 duration-300  cursor-pointer"
            >
                <IoIosArrowDropright size={45} color='gray' />
            </button>
            

            {/* cards */}
            <div 
                ref={scrollRef} 
                className="flex justify-between"
                // className='grid grid-cols-2 xl:grid-cols-4 justify-items-center  px-10 xl:px-0  xl:gap-13'
            >
                
                {cardsToDisplay.map((card) => (
                    <div 
                        key={card.id} 
                        className="relative flex flex-col justify-between shrink-0 w-[386px] h-[483px] p-[23px] bg-white shadow-lg overflow-hidden"
                    >
                        {/* heart */}
                        <div className='flex justify-end'>
                            <img src='/heart.png' alt="heart" className='cursor-pointer hover:scale-110 duration-300' />
                        </div>
                        
                        {/* img */}
                        <img 
                            src={card.imageUrl}
                            alt="img-card" 
                            className='mx-auto w-[274px] h-58 object-cover' 
                        />
                        
                        {/* descr */}
                        <div>
                            <h2 className='font-bold text-[#676767] uppercase'>{card.title}</h2>

                            <div>
                                <div className='flex justify-between mt-1'>
                                    <p className='font-md text-sm text-[#676767] mb-2 uppercase'>{card.model}</p>
                                    <span className='text-sm text-[#676767] line-through'>{card.priceOld}</span>
                                </div>

                                <div className='flex justify-between mb-[25px]'>
                                    <StarRating rating={card.rating} totalReviews={card.totalReviews}  />
                                    <span className='font-bold text-[18px] text-[#676767]'>{card.priceNew}</span>
                                </div>

                                <div className='flex justify-between'>
                                    <div>
                                        <p className='font-bold text-[#63B569] uppercase'>{card.discountText}</p>
                                        <p className='font-light text-[#676767] uppercase'>{card.limitText}</p>
                                    </div>

                                    <img src="/cards/orange-basket.png" alt="orange-basket" className='cursor-pointer hover:scale-105 duration-300' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}


export default Cards
