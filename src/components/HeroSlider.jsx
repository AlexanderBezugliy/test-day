import React, { useState } from 'react'

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 0,
            left: "/hero-left.png",   
            right: "/hero-right.png",
            title: 'PEARL SUGAR'
        },
        {
            id: 1,
            left: "/hero-left2.png",   
            right: "/hero2-right@2x.png",
            title: 'WAFFLE MAKER'
        },
        {
            id: 2,
            left: "/hero-left.png",   
            right: "/hero-right.png",
            title: 'PEARL SUGAR'
        },
        {
            id: 3,
            left: "/hero-left2.png",   
            right: "/hero2-right@2x.png",
            title: 'WAFFLE MAKER'
        }
    ];

    return (
        <div className='relative flex items-center mt-[90px] max-w-[1660px] mx-auto'>
            {/* left */}
            <div className='absolute top-12 left-0 flex-1 z-10 transition-opacity duration-500'>
                <img 
                    src={slides[currentSlide].left} 
                    alt="hero-left" 
                    className='w-[750px] object-cover rounded-xl' 
                />
            </div>

            {/* right */}
            <div className='absolute top-0 right-0 flex-1 items-center py-8 pl-[360px] justify-center bg-[#F5F5F5] rounded-xl z-4'>
                <img 
                    src={slides[currentSlide].right} 
                    alt="hero-right" 
                    className='w-[609px] h-[520px] object-contain transition-opacity duration-500' 
                />

                <div className='absolute top-[100px] left-[90px] text-[#676767]'>
                    <h1 className='text-[80px] font-semibold w-[315px] leading-20'>{slides[currentSlide].title}</h1>
                    <p className='w-[430px] text-sm pt-[15px] pb-[30px]'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.</p>

                    <button className='flex items-center bg-[#F4C22F] px-[70px] py-[13px] text-white rounded-md uppercase cursor-pointer hover:bg-amber-500 duration-300' >
                        Shop now
                        <img src="/arrow-right.png" alt="arrow-right" className='inline-flex ml-3' />
                    </button>

                    {/* dots */}
                    <div className='flex gap-3 mt-22'>
                        {slides.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentSlide === index ? 'bg-[#F4C22F]' : 'bg-[#D9D9D9] hover:bg-gray-400'
                                }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSlider
