"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-full relative bg-black">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="heading1  drop-shadow-lg">
          Introducing Official Merchandise
        </h1>
        <p className=" heading4 drop-shadow-lg mt-5 max-w-[32rem] ">
          Discover and Flaunt Campus Spirit with our Exclusive Merchandise!
        </p>
        <Link
          className="flex gap-1 items-center border bottom-10 absolute  rounded-full px-4 p-1 "
          href="/store"
        >
          Explore products <ChevronDown />{" "}
        </Link>
      </div>

      {/* background image */}

      <Image
        src={"/herobg.webp"}
        alt="Photo"
        className="absolute inset-0 brightness-75"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Hero;
