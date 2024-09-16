import { menuItems } from "@/utils/menuItems";
import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const MenuItems = () => {
  return menuItems.map((item, id) => {
    return (
      <li
        className="hover:bg-gray-200 cursor-pointer py-2 justify-between lg:justify-start px-5 flex items-center gap-2 group"
        key={id}
      >
        <Link href={`/${item?.title.toLocaleLowerCase().replaceAll(" ")}`}>
          {item.title}
        </Link>
        <FaAngleDown className="-rotate-90 lg:group-hover:rotate-180 transition-all duration-500 delay-100" />
      </li>
    );
  });
};

export default MenuItems;
