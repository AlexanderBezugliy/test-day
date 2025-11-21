import React from 'react'
import Title from './ui/Title'
import StarRating from './ui/StarRating'
import ButtonCircle from './ui/ButtonCircle'
import { recipesData } from '../assets/script'



const Authentic = () => {
    return (
        <div className='max-w-3xl authentic-md:max-w-425 mx-auto mt-[70px] px-4'>
            {/* title */}
            <Title 
                leftTitle="authentic" 
                rightTitle="recipes" 
                subTitle={
                    <>
                        Try one of our pearl sugar recipe at the comfort of your home. <br />In the kitchen with waffle pantry.
                    </>
                }
            />

            {/* cards */}
            {/* <div className='flex justify-around authentic-xl:justify-between mb-10'> */}
            <div className='grid grid-cols-1 authentic-sm:grid-cols-2 authentic-md:grid-cols-3 justify-items-center gap-0 authentic-xl:gap-30 mb-10'> 
                {recipesData.map((recipe) => (
                    <div 
                        key={recipe.id} 
                        className=' max-w-[350px] authentic-lg:max-w-[472px] authentic-lg:max-h-[525px] shadow-lg rounded-lg overflow-hidden bg-white mb-5'
                    >
                        {/* <div className='flex flex-col justify-between'> */}
                            <img 
                                src={recipe.img} 
                                alt={recipe.title} 
                                className='w-full object-cover' 
                            />

                            <div className='relative h-[230px] authentic-lg:h-auto  flex flex-col justify-between items-center px-5 authentic-lg:px-[45px] text-[#676767] py-7 '>
                                <StarRating rating={recipe.rating}  />
                                
                                <img 
                                    src="/authentic/share-icon.png" 
                                    alt="share" 
                                    className='absolute top-7 right-[18px] object-cover cursor-pointer hover:scale-110 duration-200' 
                                />

                                <h3 className='w-[200px] authentic-lg:w-full font-semibold mt-2 uppercase text-center'>
                                    {recipe.title}
                                </h3>

                                <div>
                                    <img src="/authentic/time.png" alt="time" className='inline mr-2 my-[12px]' />
                                    {recipe.time}
                                </div>

                                <p className='text-[15px] text-center'>
                                    {recipe.text}
                                </p>
                            </div>
                        {/* </div> */}
                    </div> 
                ))}
                
            </div>
            
            {/* button */}
            <div className='flex justify-center'>
                <ButtonCircle title="discover more recipes" />
            </div>
            
        </div>
    )
}

export default Authentic;
