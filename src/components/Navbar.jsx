import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* 1st */}
      <div className="relative hidden justify-between bg-[#F6F6F6] px-[120px] lg:flex">
        {/* logo */}
        <div>
          <img
            src="/logo.svg"
            alt="logo"
            className="absolute top-0 left-[128px] z-10 rounded-b-full border border-r-8 border-b-8 border-l-8 border-[#F6F6F6] bg-white px-[9px] pt-5 pb-[12px]"
          />

          <div className="absolute top-1 left-[73px] h-[68px] w-18 rounded-tr-full border-t-30 border-r-16 border-[#F6F6F6] bg-white"></div>
          <div className="absolute top-1 left-[239px] h-[68px] w-18 rounded-tl-full border-t-30 border-l-16 border-[#F6F6F6] bg-white"></div>
          <img
            src="/flag.png"
            alt=""
            className="absolute top-25 left-[165px] origin-left -skew-y-6 rounded-sm"
          />
        </div>

        {/* nav */}
        <div className="z-9 flex gap-px font-semibold text-white">
          <a
            href="wholesale"
            className="rounded-bl-md bg-[#B8B8B8] px-[34px] py-[5px] uppercase hover:bg-amber-500"
          >
            Wholesale
          </a>
          <a
            href="recipes"
            className="bg-[#B8B8B8] px-[34px] py-[5px] uppercase hover:bg-amber-500"
          >
            Recipes
          </a>
          <a
            href="blog"
            className="bg-[#B8B8B8] px-[34px] py-[5px] uppercase hover:bg-amber-500"
          >
            Blog
          </a>
          <a
            href="faq"
            className="rounded-br-md bg-[#B8B8B8] px-[34px] py-[5px] uppercase hover:bg-amber-500"
          >
            FAQ
          </a>
        </div>
      </div>

      {/* 2nd */}
      <div className="mt-9 ml-75 hidden flex-col items-center justify-between pr-[120px] lg:flex xl:flex-row">
        <div className="mb-5 flex gap-8 text-sm text-[#676767] xl:mb-0">
          <a href="#" className="uppercase">
            belgian pearl sugar
          </a>
          <a href="#" className="uppercase">
            liege waffle mix
          </a>
          <a href="#" className="uppercase">
            liege waffle maker
          </a>
          <a href="#" className="uppercase">
            speciality ingredients
          </a>
        </div>

        <div className="flex items-center gap-[30px] text-[#B8B8B8]">
          {/* search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="h-[50px] w-40 cursor-pointer rounded-full border pl-11 xl:w-60"
            />
            <img
              src="/search.png"
              alt="search-icon"
              className="absolute top-4.5 left-5"
            />
          </div>

          {/* basket */}
          <img src="/basket.png" alt="basket" className="cursor-pointer" />

          {/* sign in */}
          <div className="cursor-pointer text-[#7E7E7E]">
            <img
              src="/signIn.png"
              alt="sign-in"
              className="mr-2 inline-block"
            />{" "}
            Sign in
          </div>
        </div>
      </div>

      {/* mobile version */}
      <div className="relative bg-[#F6F6F6] lg:hidden">
        <div className="relative z-20 flex items-center justify-between bg-[#F6F6F6] px-20 py-4 shadow-sm">
          {/* mobile-logo */}
          <div className="flex items-center justify-center">
            <img src="/logo.svg" alt="logo" className="h-auto w-20" />
          </div>

          {/* pop-up button */}
          <button
            onClick={closeMenu}
            className="text-gray-600 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* pop-up */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 z-50 flex w-full flex-col gap-6 bg-white p-6 shadow-lg">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="h-[45px] w-full rounded-full border border-gray-200 bg-gray-50 pl-10 outline-none"
              />
              <img
                src="/search.png"
                alt="search"
                className="absolute top-3.5 left-4 h-4 w-4 opacity-50"
              />
            </div>

            <div className="flex flex-col gap-4 text-sm font-bold text-gray-700 uppercase">
              <a
                onClick={closeMenu}
                href="belgian-pearl-sugar"
                className="hover:text-amber-500"
              >
                belgian pearl sugar
              </a>
              <a
                onClick={closeMenu}
                href="liege-waffle-mix"
                className="hover:text-amber-500"
              >
                liege waffle mix
              </a>
              <a
                onClick={closeMenu}
                href="liege-waffle-maker"
                className="hover:text-amber-500"
              >
                liege waffle maker
              </a>
              <a
                onClick={closeMenu}
                href="speciality-ingredients"
                className="hover:text-amber-500"
              >
                speciality ingredients
              </a>
            </div>

            <hr className="border-gray-100" />

            <div className="flex flex-wrap gap-3 text-xs font-semibold text-white">
              <a
                onClick={closeMenu}
                href="wholesale"
                className="rounded-md bg-[#B8B8B8] px-4 py-2"
              >
                Wholesale
              </a>
              <a
                onClick={closeMenu}
                href="recipes"
                className="rounded-md bg-[#B8B8B8] px-4 py-2"
              >
                Recipes
              </a>
              <a
                onClick={closeMenu}
                href="blog"
                className="rounded-md bg-[#B8B8B8] px-4 py-2"
              >
                Blog
              </a>
              <a
                onClick={closeMenu}
                href="faq"
                className="rounded-md bg-[#B8B8B8] px-4 py-2"
              >
                FAQ
              </a>
            </div>

            {/* Sign In & Basket */}
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-[#7E7E7E]">
                <img src="/signIn.png" alt="sign-in" className="w-5" /> Sign in
              </div>
              <div className="flex items-center gap-2 text-[#7E7E7E]">
                <img src="/basket.png" alt="basket" className="w-6" /> Basket
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
