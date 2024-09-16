import { menuItems } from "@/utils/menuItems";
import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const MenuItems = () => {
  return menuItems.map((item, i) => {
    return (
      <li
        className="hover:bg-gray-200 cursor-pointer py-2 justify-between lg:justify-start px-4 flex items-center gap-2 group"
        key={i}
      >
        <Link
          href={`/${item?.title.toLocaleLowerCase().replaceAll(/\s/g, "")}`}
        >
          {item.title}
        </Link>
        <FaAngleDown className="-rotate-90 lg:rotate-0 lg:group-hover:rotate-180 transition-all duration-500 delay-100" />
      </li>
    );
  });
};

export default MenuItems;
