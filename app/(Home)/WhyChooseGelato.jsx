import { chooseGelatoData } from "@/utils/chooseGelatoData";
import Image from "next/image";
import React from "react";

const WhyChooseGelato = () => {
  return (
    <section className="max-w-screen-lg w-full px-3 xl:max-w-screen-xl mx-auto py-14">
      <h1 className="text-center text-3xl md:text-5xl font-bold pb-10 leading-relaxed">
        Why choose Gelato
      </h1>
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <Image
          className="lg:w-full"
          src={"/choose.webp"}
          height={600}
          width={600}
          alt="Print Demand Image"
        />
        <div className="w-full">
          {chooseGelatoData.map((data, i) => {
            return (
              <div className="mt-4" key={i}>
                <h1 className="text-2xl leading-normal">{data?.title}</h1>
                <p className=" leading-normal">{data?.discrip}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGelato;
