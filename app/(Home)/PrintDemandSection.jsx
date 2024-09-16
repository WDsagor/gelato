import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShopify } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";

const PrintDemandSection = () => {
  return (
    <section className="flex bg-orange-100/40 md:bg-white w-full items-center flex-col gap-4 md:flex-row-reverse px-5 py-10 max-w-screen-lg xl:max-w-screen-xl mx-auto">
      <Image
        className="lg:w-full"
        src={"/download.webp"}
        height={400}
        width={400}
        alt="Print Demand Image"
      />
      <div>
        <h1 className=" text-4xl md:text-6xl leading-tight font-bold py-10">
          Print on demand for your ecommerce business
        </h1>
        <h3 className="text-2xl  py-5">
          Sign up for free and only pay for what you sell
        </h3>
        <p className="font-light">
          Turn your passion into profit with the worlds largest
          <Link
            className="underline px-1 underline-offset-4 hover:text-slate-400"
            href={"/"}
          >
            print on demand
          </Link>
          network.
        </p>
        {/* button area */}
        <div className="flex flex-row md:flex-col lg:flex-row gap-2 mt-10 max-w-52">
          <Link
            className=" btn hover:bg-black hover:text-white/50 bg-black text-white font-semibold  rounded-3xl items-center"
            href={"/contact-us"}
          >
            <button className="">Get started for free</button>
          </Link>
          <Link
            className=" btn btn-outline hover:bg-gray-200 hover:text-black  font-semibold rounded-3xl items-center"
            href={"/contact-us"}
          >
            <button className="">See our products</button>
          </Link>
        </div>
        <div className="mt-10 ">
          <h1 className="text-4xl items-end flex font-bold italic cursor-pointer">
            <FaShopify size={50} /> shopify{" "}
          </h1>
          <p className="font-light hover:text-slate-400">
            <span className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star bg-emerald-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star bg-emerald-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star bg-emerald-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star bg-emerald-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star bg-emerald-500"
              />
            </span>{" "}
            4.8/5 <br /> based on 887 reviews
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrintDemandSection;
