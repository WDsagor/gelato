import Image from "next/image";
import Link from "next/link";
import React from "react";

const GelatoConnect = () => {
  return (
    <section className="">
      <div className="max-w-screen-lg w-full px-4 xl:max-w-screen-xl mx-auto py-14">
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="">
            <h1 className="">For print producers</h1>
            <h1 className="text-3xl md:text-5xl font-bold leading-normal">
              Gelato Connect
            </h1>
            <p className="text-2xl  py-5">
              Elevate efficiency, cut costs, and seamlessly automate with our
              all-in-one software solution for the print industry
            </p>
            <Link
              className=" btn hover:bg-black hover:text-white/50 bg-black text-white font-semibold  rounded-3xl items-center"
              href={"/contact-us"}
            >
              <button className="">Learn more</button>
            </Link>
          </div>
          <Image
            className="lg:w-full lg:max-w-2xl"
            src={"/download (1).gif"}
            height={500}
            width={500}
            alt="Demand seller"
          />
        </div>
      </div>
    </section>
  );
};

export default GelatoConnect;
