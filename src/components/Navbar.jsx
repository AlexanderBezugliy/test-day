import React, { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* 1st */}
            <div className='hidden lg:flex relative justify-between bg-[#F6F6F6] px-[120px]'>
                {/* logo */}
                <div>
                    <img src="/logo.svg" alt="logo" className='absolute top-0 left-[128px] px-[9px] bg-white pt-5 border border-b-8 border-l-8 border-r-8 border-[#F6F6F6] rounded-b-full pb-[12px] z-10' />

                    <div className='absolute top-1 left-[73px] w-18 h-[68px] bg-white border-t-30 border-r-16 border-[#F6F6F6] rounded-tr-full'></div>
                    <div className='absolute top-1 left-[239px] w-18 h-[68px] bg-white border-t-30 border-l-16 border-[#F6F6F6] rounded-tl-full'></div>
                    <img src="/flag.png" alt="" className='absolute top-25 left-[165px] -skew-y-6 origin-left rounded-sm' />
                </div>

                {/* nav */}
                <div className='flex gap-px text-white font-semibold z-9'>
                    <a href="wholesale" className='px-[34px] py-[5px] bg-[#B8B8B8] hover:bg-amber-500 rounded-bl-md uppercase'>Wholesale</a>
                    <a href="recipes" className='px-[34px] py-[5px] bg-[#B8B8B8] hover:bg-amber-500 uppercase'>Recipes</a>
                    <a href="blog" className='px-[34px] py-[5px] bg-[#B8B8B8] hover:bg-amber-500 uppercase'>Blog</a>
                    <a href="faq" className='px-[34px] py-[5px] bg-[#B8B8B8] hover:bg-amber-500 rounded-br-md uppercase'>FAQ</a>
                </div>
            </div>

            {/* 2nd */}
            <div className='hidden lg:flex flex-col xl:flex-row justify-between items-center ml-75 mt-9 pr-[120px]'>
                <div className='flex gap-8  text-sm text-[#676767] mb-5 xl:mb-0'>
                    <a href="#" className='uppercase'>belgian pearl sugar</a>
                    <a href="#" className='uppercase'>liege waffle mix</a>
                    <a href="#" className='uppercase'>liege waffle maker</a>
                    <a href="#" className='uppercase'>speciality ingredients</a>
                </div>

                <div className='flex items-center gap-[30px] text-[#B8B8B8]'>
                    {/* search */}
                    <div className='relative'>
                        <input type="text" placeholder='Search' className='w-40 xl:w-60 h-[50px] pl-11 border rounded-full cursor-pointer' />
                        <img src="/search.png" alt="search-icon" className='absolute top-4.5 left-5'  />
                    </div>

                    {/* basket */}
                    <img src="/basket.png" alt="basket" className='cursor-pointer' />
                    
                    {/* sign in */}
                    <div className='text-[#7E7E7E] cursor-pointer'>
                        <img src="/signIn.png" alt="sign-in" className='inline-block mr-2'/> Sign in
                    </div>
                </div>
            </div>

            

            {/* mobile version */}
            <div className='lg:hidden relative bg-[#F6F6F6]'>
                <div className='flex justify-between items-center px-20 py-4 shadow-sm relative z-20 bg-[#F6F6F6]'>
                    {/* mobile-logo */}
                    <div className='flex items-center justify-center'>
                        <img src="/logo.svg" alt="logo" className='w-20 h-auto' />
                    </div>

                    {/* pop-up button */}
                    <button 
                        onClick={closeMenu}
                        className='text-gray-600 focus:outline-none'
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        )}
                    </button>
                </div>

                {/* pop-up */}
                {isMobileMenuOpen && (
                    <div className='absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col p-6 gap-6'>
                        <div className='relative w-full'>
                             <input type="text" placeholder='Search' className='w-full h-[45px] pl-10 border border-gray-200 rounded-full bg-gray-50 outline-none' />
                             <img src="/search.png" alt="search" className='absolute top-3.5 left-4 w-4 h-4 opacity-50' />
                        </div>

                        <div className='flex flex-col gap-4 text-gray-700 font-bold text-sm uppercase'>
                            <a onClick={closeMenu} href="belgian-pearl-sugar" className='hover:text-amber-500'>belgian pearl sugar</a>
                            <a onClick={closeMenu} href="liege-waffle-mix" className='hover:text-amber-500'>liege waffle mix</a>
                            <a onClick={closeMenu} href="liege-waffle-maker" className='hover:text-amber-500'>liege waffle maker</a>
                            <a onClick={closeMenu} href="speciality-ingredients" className='hover:text-amber-500'>speciality ingredients</a>
                        </div>
                        
                        <hr className='border-gray-100' />

                        <div className='flex flex-wrap gap-3 text-xs font-semibold text-white'>
                            <a onClick={closeMenu} href="wholesale" className='px-4 py-2 bg-[#B8B8B8] rounded-md'>Wholesale</a>
                            <a onClick={closeMenu} href="recipes" className='px-4 py-2 bg-[#B8B8B8] rounded-md'>Recipes</a>
                            <a onClick={closeMenu} href="blog" className='px-4 py-2 bg-[#B8B8B8] rounded-md'>Blog</a>
                            <a onClick={closeMenu} href="faq" className='px-4 py-2 bg-[#B8B8B8] rounded-md'>FAQ</a>
                        </div>

                        {/* Sign In & Basket */}
                        <div className='flex justify-between items-center mt-2'>
                            <div className='text-[#7E7E7E] font-semibold flex items-center gap-2'>
                                <img src="/signIn.png" alt="sign-in" className='w-5'/> Sign in
                            </div>
                            <div className='flex items-center gap-2 text-[#7E7E7E]'>
                                <img src="/basket.png" alt="basket" className='w-6' /> Basket
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Navbar;
