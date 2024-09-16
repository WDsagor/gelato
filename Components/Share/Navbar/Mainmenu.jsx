import React from "react";
import MenuItems from "../MenuItems";

const MainMenu = () => {
  return (
    <div className="border-b-[1px] hidden lg:flex bg-white z-10 ">
      <div className="flex flex-row justify-between justify-items-center max-w-screen-lg xl:max-w-screen-xl w-full mx-auto">
        <ul className="flex">
          <MenuItems />
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
