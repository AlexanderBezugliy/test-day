import React, { useState } from 'react'

const HeroSection = () => {
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


    // поработать над адаптивностью слайдера (добавить ЛЕВОЙ части серый бэкграунд)

    return (
        <div className=' lg:mt-8 xl:mt-[100px] max-w-[1920px] mx-auto flex flex-col slider-response:flex-row items-center slider-response:justify-center bg-gray-100 slider-response:bg-white py-10 slider-response:py-0'>
            {/* left */}
            <div className='flex-1 slider-sm:-mr-18 z-10'>
                <img 
                    src={slides[currentSlide].left} 
                    alt="hero-left" 
                    className='hidden slider-sm:block w-[350px] slider-img-sm:w-[560px] slider-response:w-auto h-auto object-cover rounded-full slider-response:rounded-3xl shadow-2xl' 
                />
            </div>

            {/* right */}
            <div className='flex flex-1 slider-response:bg-gray-200 rounded-xl'> 
                <div className='relative flex flex-col slider-sm:flex-row justify-end w-full pl-0 slider-response:pl-[360px] py-[45px] slider-response:min-w-[1100px] h-auto'>
                    
                    <div className='slider-response:absolute px-6 slider-sm:px-0 slider-response:top-[100px] slider-response:left-40'>
                        <h1 className='text-[80px] text-[#676767] font-semibold w-[315px] leading-20'>{slides[currentSlide].title}</h1>
                        
                        <p className='w-60 slider-img-sm:w-[430px] text-sm pt-[15px] pb-[30px]'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.</p>

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
                    
                    <img 
                        src={slides[currentSlide].right} 
                        alt="hero-right" 
                        className='w-[414px] slider-response:w-auto slider-response:h-[600px] object-contai transition-opacity duration-500' 
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
