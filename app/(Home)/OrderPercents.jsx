import { percentilesData } from "@/utils/percentData";
import React from "react";

const OrderPercents = () => {
  return (
    <div className="bg-orange-100/20 py-10 hidden md:flex">
      <div className="max-w-screen-lg px-3 gap-5 flex justify-between w-full xl:max-w-screen-xl mx-auto">
        {percentilesData.map((data, i) => {
          return (
            <div key={i} className="text-center w-full max-w-xs font-medium">
              <h1 className="text-3xl">{data?.percentiles}</h1>
              <p className="text-2xl">{data?.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderPercents;
