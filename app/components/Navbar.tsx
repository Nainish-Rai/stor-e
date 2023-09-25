"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, spring } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
type Props = {};

function Navbar({}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY <= 25) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    changeNavbarColor();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeNavbarColor);
  });
  return (
    <motion.div
      className={`
       ${
         !colorChange && pathname === "/"
           ? "bg-white  backdrop-blur-[4px] "
           : "text-white  bg-transperant "
       } 
       ${
         pathname !== "/" ? "shadow-md bg-white text-black" : ""
       } w-full  fixed z-30  top-0 duration-100 lg:px-0 px-3 `}
    >
      <div className="flex p-2  items-center w-full max-w-7xl mx-auto justify-between">
        {/* TITLE */}
        <h1
          className={`heading4 w-1/3 flex drop-shadow-md items-center justify-start`}
        >
          STOR-E
        </h1>
        {/* Centre Section */}
        <div className="w-1/3 hidden lg:flex px-auto">
          <ul className="flex space-x-4">
            <li
              onClick={() => router.push("/")}
              className="font-medium drop-shadow-md cursor-pointer hover:opacity-60"
            >
              Home
            </li>
            <li className="font-medium drop-shadow-md cursor-pointer hover:opacity-60">
              About
            </li>
            <li className="font-medium drop-shadow-md cursor-pointer hover:opacity-60">
              Services
            </li>
            <li className="font-medium drop-shadow-md cursor-pointer hover:opacity-60">
              Facilities
            </li>
            <li className="font-medium drop-shadow-md cursor-pointer hover:opacity-60">
              More
            </li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="w-1/3 justify-end hidden lg:flex  space-x-12 items-center">
          <div className="flex space-x-4">
            <Search className="cursor-pointer hover:opacity-60 drop-shadow-md" />
            <ShoppingBag className="cursor-pointer hover:opacity-60 drop-shadow-md" />
          </div>
          <div className="flex space-x-4 items-center">
            <p className="font-semibold cursor-pointer drop-shadow-md">
              Sign in
            </p>
            <Button className={`rounded-full`}>Sign Up</Button>
          </div>
        </div>
        {/* mobile menu */}
        <div className="lg:hidden">
          <Menu />
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
