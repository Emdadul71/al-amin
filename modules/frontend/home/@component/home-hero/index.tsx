import Image from "next/image";
import React from "react";

const HomeHero = () => {
  return (
    <section className="pt-[100px] bg-grey">
      <div className="container">
        <div className="max-w-[870px] mx-auto w-full">
          <div className="flex flex-col justify-center ">
            <h1 className="text-headerLg text-center ">Home</h1>
            <p className="text-center text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget mauris quis velit molestie mattis. Sed auctor urna eget felis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
