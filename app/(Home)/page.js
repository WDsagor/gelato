import React from "react";
import PrintDemandSection from "./PrintDemandSection";
import OrderPercents from "./OrderPercents";
import WhyChooseGelato from "./WhyChooseGelato";
import DemandSellers from "./DemandSellers";

const page = () => {
  return (
    <section>
      <PrintDemandSection />
      <OrderPercents />
      <WhyChooseGelato />
      <DemandSellers />
    </section>
  );
};

export default page;
