import React from "react";
import PrintDemandSection from "./PrintDemandSection";
import OrderPercents from "./OrderPercents";
import WhyChooseGelato from "./WhyChooseGelato";
import DemandSellers from "./DemandSellers";
import GelatoConnect from "./GelatoConnect";

const page = () => {
  return (
    <section>
      <PrintDemandSection />
      <OrderPercents />
      <WhyChooseGelato />
      <DemandSellers />
      <GelatoConnect />
    </section>
  );
};

export default page;
