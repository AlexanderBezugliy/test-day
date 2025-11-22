import React, { useState } from "react";
import ButtonCircle from "./ui/ButtonCircle";

const BottomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slidesBottom = [
    {
      id: 0,
      buttonName: "ingredients",
      left: "/bottom-slider/cart-img2.png",
      right: "/bottom-slider/img2.png",
      title: "Lorem ipsum dolor sit amet consectetur",
      descr:
        "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.",
    },
    {
      id: 1,
      buttonName: "equipment",
      left: "/bottom-slider/cart-img1.png",
      right: "/bottom-slider/img1.png",
      title: (
        <>
          the only limit is <br /> your imagination
        </>
      ),
      descr:
        "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.",
    },
    {
      id: 2,
      buttonName: "service",
      left: "/bottom-slider/cart-img2.png",
      right: "/bottom-slider/img2.png",
      title: "Lorem ipsum dolor sit amet consectetur",
      descr:
        "Try one of our pearl sugar recipe at the comfort of your home. In the kitchen with waffle pantry. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.",
    },
  ];

  return (
    <div className="mt-[45px] mb-53 w-full">
      <div className="b-slider-xl:justify-between flex justify-center">
        {/* left side */}
        <div className="flex max-h-[582px]">
          {/* persone */}
          <img
            src="/bottom-slider/persone.png"
            alt="persone"
            className="b-slider-xl:block hidden"
          />
        </div>

        {/* right-side */}
        <div className="relative">
          <div className="b-slider-xl:absolute b-slider-sm:w-[430px] b-slider-md:w-[615px] b-slider-lg:w-[741px] top-[106px] -left-155 w-[350px] rounded-2xl shadow-lg">
            {/* buttons */}
            <div className="b-slider-lg:flex-row flex flex-col items-center justify-around rounded-t-2xl bg-[#F4C22F] px-5 text-[24px] text-white italic">
              {slidesBottom.map((slide, index) => (
                <button
                  key={slide.buttonName}
                  onClick={() => setCurrentSlide(index)}
                  className={`my-2 flex cursor-pointer items-center uppercase transition-all duration-300 ${currentSlide === index ? "border-b-2 border-b-white font-semibold" : ""}`}
                >
                  <span className="text-[30px]">{index + 1}.</span>
                  {slide.buttonName}
                </button>
              ))}
            </div>

            <div className="flex h-[600px] flex-col items-center justify-between bg-white pb-9">
              <div className="flex h-[175px] w-[330px] items-center justify-center">
                <img
                  src={slidesBottom[currentSlide].left}
                  alt="cart-img"
                  className="mt-[75px] object-cover transition-all duration-300"
                />
              </div>

              <div className="text-center">
                <h3 className="b-slider-md:text-[40px] pt-9 pb-3 text-center text-[18px] text-[#F4C22F] uppercase">
                  {slidesBottom[currentSlide].title}
                </h3>
                <p className="b-slider-md:px-[72px] text-md b-slider-md:text-[15px] px-5 text-[#676767]">
                  {slidesBottom[currentSlide].descr}
                </p>
              </div>

              <ButtonCircle title="learn more" />
            </div>
          </div>

          <img
            src={slidesBottom[currentSlide].right}
            alt="right-slide"
            className="b-slider-sm:w-[430px] b-slider-md:w-[615px] b-slider-lg:w-[741px] b-slider-xl:w-[970px] b-slider-xl:h-[630px] b-slider-xl:rounded-b-none mx-auto h-[400px] w-[350px] rounded-b-2xl object-cover transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSlider;
