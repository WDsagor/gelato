import Link from "next/link";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

const TopNavbar = () => {
  return (
    <div className="bg-black py-2">
      <div className="text-white text-center font-light flex items-center gap-2 justify-center">
        FREE SHIPPING for orders over $300. Order today
        <span className="group relative flex max-w-max flex-col items-center justify-center">
          <HiOutlineExclamationCircle
            className="inline-flex cursor-pointer  text-center font-medium rotate-180"
            size={22}
          />
          <div className="absolute left-1/2 top-4 ml-auto mr-auto min-w-max -translate-x-1/2 invisible transform rounded-lg px-3 py-2  font-medium transition-all  group-hover:visible">
            <div className="flex max-w-xs flex-col items-center shadow-lg">
              <div className="clip-bottom h-2 w-4 bg-white shadow-md"></div>
              <div className="rounded-lg border border-s  bg-white  shadow-xl p-2 text-center">
                <p className="text-black flex gap-1">
                  Full
                  <Link
                    className=" text-blue-300 underline cursor-pointer"
                    href="/2"
                  >
                    terms and conditions
                  </Link>
                  apply
                </p>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default TopNavbar;
