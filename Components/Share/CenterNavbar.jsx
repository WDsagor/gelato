import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsHeadset } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi2";
import { IoGlobeOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
const CenterNavbar = () => {
  return (
    <section className="py-2 border border-b-[1px]">
      <div className="px-10 md:px-3 navbar flex flex-row justify-between justify-items-center max-w-screen-lg xl:max-w-screen-xl w-full mx-auto">
        <Link href={"/"}>
          <Image
            src={"/gelato_logo_black.svg"}
            width={150}
            height={80}
            alt="logo"
          />
        </Link>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link
                className=" btn font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <BsHeadset size={25} />
                <button>Contact us</button>
              </Link>
            </li>
            <li>
              <details>
                <summary className=" pt-1 btn font-semibold btn-sm rounded-3xl items-center  ">
                  <IoGlobeOutline size={25} />
                  <button>IN/EUR</button>
                </summary>
                <ul className="bg-base-100 w-40 rounded-t-none p-2">
                  <li>
                    <Link href={"/contact-us"}>Language - IN</Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>Currency - EUR</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link
                className=" btn font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <HiShoppingCart size={25} />
                <button>Cart</button>
              </Link>
            </li>
            <li>
              <Link
                className=" btn font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <FaUserAlt size={25} />
                <button>Sign in</button>
              </Link>
            </li>
            <li>
              <Link
                className=" btn hover:bg-black hover:text-white/50 bg-black text-white font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <button className="">Sign up for free</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CenterNavbar;
