import React, { useState } from "react";
import ButtonCircle from "./ui/ButtonCircle";


const BottomSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);

    const slidesBottom = [
        {
            id: 0,
            buttonName: 'ingredients',
            left: "/bottom-slider/cart-img2.png",   
            right: "/bottom-slider/img2.png",
            title: "Lorem ipsum dolor sit amet consectetur",
            descr: 'Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.' 
        },
        {
            id: 1,
            buttonName: 'equipment',
            left: "/bottom-slider/cart-img1.png",   
            right: "/bottom-slider/img1.png",
            title: <>the only limit is <br /> your imagination</>,
            descr: 'Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.' 
        },
        {
            id: 2,
            buttonName: 'service',
            left: "/bottom-slider/cart-img2.png",   
            right: "/bottom-slider/img2.png",
            title: 'Lorem ipsum dolor sit amet consectetur',
            descr: 'Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.' 
        },
    
    ];

    return (
        <div className="w-full mt-[45px] mb-53">

            <div className="flex justify-center b-slider-xl:justify-between">
                {/* left side */}
                <div className="flex max-h-[582px]">
                    {/* persone */}
                    <img src="/bottom-slider/persone.png" alt="persone" className="hidden b-slider-xl:block" />
                </div>

                {/* right-side */}
                <div className="relative">
                    <div className="b-slider-xl:absolute top-[106px] -left-155 w-[741px] shadow-lg rounded-2xl ">
                        {/* buttons */}
                        <div className="flex justify-around px-5 italic text-[24px] bg-[#F4C22F] text-white rounded-t-2xl">
                            {slidesBottom.map((slide, index) => (
                                <button
                                    key={slide.buttonName}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`flex items-center my-2 cursor-pointer uppercase transition-all duration-300
                                                ${currentSlide === index ? 'font-semibold border-b-2 border-b-white' : ''}`}
                                >
                                    <span className="text-[30px]">{index + 1}.</span>{slide.buttonName}
                                </button>
                            ))}
                        </div>

                        <div className="flex h-[600px] flex-col justify-between items-center bg-white pb-9">
                            <div className="w-[330px] h-[175px] flex items-center justify-center">
                                <img src={slidesBottom[currentSlide].left} alt="cart-img" className="mt-[75px] object-cover transition-all duration-300" />
                            </div>

                            <div className="text-center">
                                <h3 className="text-center text-[#F4C22F] text-[40px] pt-9 pb-3 uppercase">{slidesBottom[currentSlide].title}</h3>
                                <p className="px-[72px] text-[#676767] text-[15px]">{slidesBottom[currentSlide].descr}</p>
                            </div>

                            <ButtonCircle title="learn more" />
                        </div>
                    </div>

                    <img 
                        src={slidesBottom[currentSlide].right} 
                        alt="right-slide" 
                        className="w-[741px] h-[400px] b-slider-xl:w-[970px] b-slider-xl:h-[630px] rounded-b-2xl b-slider-xl:rounded-b-none object-cover transition-all duration-300" 
                    />
                </div>
            </div>

        </div>
    );
};

export default BottomSlider;
