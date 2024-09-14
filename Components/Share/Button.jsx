import Link from "next/link";
import React from "react";
import { BsHeadset } from "react-icons/bs";

const Button = ({ icon, name }) => {
  return (
    <Link
      className=" btn font-semibold btn-sm rounded-3xl items-center"
      href={"/contact-us"}
    >
      <BsHeadset size={25} />
      <button>Contact us</button>
    </Link>
  );
};

export default Button;
