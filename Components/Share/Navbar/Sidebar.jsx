import Link from "next/link";
import React from "react";
import { BsHeadset } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { IoGlobeOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import MenuItems from "../MenuItems";

const Sidebar = () => {
  return (
    <div className="drawer-side lg:hidden">
      <ul className="bg-base-100 min-h-full w-80 p-3 shadow-2xl  ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        <div className="flex-none ">
          <ul className="menu menu-horizontal divide-zinc-300 border-b-2 divide-x py-4 px-1 gap-3 ">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="btn btn-sm btn-circle btn-ghost"
            >
              <MdClose size={20} />
            </label>
            <li className="pl-2">
              <details>
                <summary className=" pt-1 btn font-semibold btn-sm rounded-3xl items-center  ">
                  <IoGlobeOutline size={25} />
                  <button>IN/EUR</button>
                </summary>
                <ul className="bg-base-100 w-52 z-10 p-2">
                  <li>
                    <Link href={"/contact-us"}>Language - IN</Link>
                  </li>
                  <li>
                    <Link href={"/contact-us"}>Currency - EUR</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li className="pl-2">
              <Link
                className=" btn font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <HiShoppingCart size={25} />
                <button>Cart</button>
              </Link>
            </li>
          </ul>
          <ul className=" menu menu-horizontal py-4 divide-zinc-300 border-b-2 divide-x justify-between items-center  px-1 gap-3 ">
            <li>
              <Link
                className=" btn hover:bg-black hover:text-white/50 bg-black text-white font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <button className="">Sign up for free</button>
              </Link>
            </li>
            <li className="pl-4">
              <Link
                className=" btn font-semibold btn-sm rounded-3xl items-center"
                href={"/contact-us"}
              >
                <FaUserAlt size={20} />
                <button>Sign in</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <MenuItems />
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
