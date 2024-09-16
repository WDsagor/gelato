import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsHeadset } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi2";
import { IoGlobeOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import Sidebar from "./Sidebar";
const CenterNavbar = () => {
  return (
    <section className="border-b-[1px]  bg-white z-10 ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="px-10 md:px-3 navbar flex flex-row justify-between justify-items-center max-w-screen-lg xl:max-w-screen-xl w-full mx-auto">
        <div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link href={"/"}>
            <Image
              src={"/gelato_logo_black.svg"}
              width={150}
              height={80}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li className=" hidden lg:flex">
              <Link
                className=" btn font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <BsHeadset size={25} />
                <button>Contact us</button>
              </Link>
            </li>
            <li className=" hidden md:flex">
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
            <li className=" hidden md:flex">
              <Link
                className=" btn font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <HiShoppingCart size={25} />
                <button>Cart</button>
              </Link>
            </li>
            <li className=" hidden lg:flex">
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
      <Sidebar />
    </section>
  );
};

export default CenterNavbar;
