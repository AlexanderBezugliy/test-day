import React from "react";
import Slider from "react-slick";
import { cardData } from "../assets/script";
import StarRating from "./ui/StarRating";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";


// arrow right
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute top-[40%] right-7 cards-sm:-right-10 rounded-full cursor-pointer hover:scale-115 duration-300 z-10">
            <IoIosArrowDropright size={40} className="text-gray-400" />
        </div>
    );
}
// arrow left
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div onClick={onClick} className="absolute top-[40%] left-7 cards-sm:-left-16 cursor-pointer hover:scale-115 duration-300 z-10">
            <IoIosArrowDropleft size={40} className="text-gray-400" />
        </div>
    );
}

const CardsSlick = () => {
    var settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1890,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative max-w-[400px] cards-sm:max-w-[700px] cards-md:max-w-5xl cards-lg:max-w-7xl cards-xl:max-w-425 mx-auto  ">
            
            <Slider {...settings}>
                {cardData.map((card) => (
                    <div key={card.id} className="px-[9px] py-[9px]">
                        <div className="relative flex flex-col justify-between shrink-0 max-w-[386px] h-[483px] p-[23px] bg-white shadow-md" >
                            {/* heart */}
                            <div className="flex justify-end">
                                <img
                                    src="/heart.png"
                                    alt="heart"
                                    className="cursor-pointer hover:scale-110 duration-300"
                                />
                            </div>

                            {/* img */}
                            <img
                                src={card.imageUrl}
                                alt="img-card"
                                className="mx-auto w-[274px] h-58 object-cover"
                            />

                            {/* descr */}
                            <div>
                                <h2 className="font-bold text-[#676767] uppercase">
                                    {card.title}
                                </h2>

                                <div>
                                    <div className="flex justify-between mt-1">
                                        <p className="font-md text-sm text-[#676767] mb-2 uppercase">
                                            {card.model}
                                        </p>
                                        <span className="text-sm text-[#676767] line-through">
                                            {card.priceOld}
                                        </span>
                                    </div>

                                    <div className="flex justify-between mb-[25px]">
                                        <StarRating
                                            rating={card.rating}
                                            totalReviews={card.totalReviews}
                                        />
                                        <span className="font-bold text-[18px] text-[#676767]">
                                            {card.priceNew}
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <div>
                                            <p className="font-bold text-[#63B569] uppercase">
                                                {card.discountText}
                                            </p>
                                            <p className="font-light text-[#676767] uppercase">
                                                {card.limitText}
                                            </p>
                                        </div>

                                        <img
                                            src="/cards/orange-basket.png"
                                            alt="orange-basket"
                                            className="cursor-pointer hover:scale-105 duration-300"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

        </div>
    );
};

export default CardsSlick;
