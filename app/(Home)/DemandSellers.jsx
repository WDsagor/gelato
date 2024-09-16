import Image from "next/image";
import Link from "next/link";
import React from "react";

const DemandSellers = () => {
  return (
    <section className="bg-orange-100/40">
      <div className="max-w-screen-lg w-full px-4 xl:max-w-screen-xl mx-auto py-14">
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center">
          <div className=" basis-3/5">
            <h1 className="">For print on demand sellers</h1>
            <h1 className="text-3xl md:text-5xl font-bold leading-normal">
              Accelerate business growth with innovative design tools and apps
            </h1>
            <p className="text-2xl  py-5">
              See how our cutting-edge solutions can help you reach new
              customers and maximize your profits.
            </p>
            <Link
              className=" btn hover:bg-black hover:text-white/50 bg-black text-white font-semibold  rounded-3xl items-center"
              href={"/contact-us"}
            >
              <button className="">Get started</button>
            </Link>
          </div>
          <Image
            className="lg:w-full"
            src={"/download.gif"}
            height={500}
            width={500}
            alt="Demand seller"
          />
        </div>
      </div>
    </section>
  );
};

export default DemandSellers;
