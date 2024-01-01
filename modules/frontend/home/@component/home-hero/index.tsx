import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";

const HomeHero = () => {
  return (
    <section className="relative z-0 py-[80px] h-[calc(100vh-74px)] grid place-items-center mb-5 lg:mb-[80px]">
      <div className=" absolute left-0 top-0 w-full h-full  overlay z-[0]"></div>
      <Image
        className="absolute left-0 top-0 z-[-1] w-full h-full object-cover"
        src="/images/misc/home-hero.jpg"
        alt="Find Universities Abroad"
        width={2000}
        height={800}
        priority
      />
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center lg:max-w-[600px] mx-auto  w-full  z-10 mt-[-16px] h-full ">
          <div className="flex flex-col justify-center items-center gap-6 w-full">
            <div className="relative w-full">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search Surah, Hadis and Many More"
                className="w-full py-3 px-8 placeholder:text-sm rounded-md focus:outline-none w-full"
              />
              <FiSearch className="absolute top-[50%] translate-y-[-50%] left-[10px] text-tertiary" />
            </div>
            <div>
              <Link
                href=""
                className="btn btn-primary text-sm py-[15px] px-[30px]"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
