"use client";
import { Label } from "@radix-ui/react-label";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {};

function ProductContent({}: Props) {
  return (
    <div className="w-full max-w-7xl mx-auto flex  p-2 h-full  ">
      {/* left */}
      <div className="w-1/2 flex">
        {/* side images */}
        <div className="py-2">
          <div className="flex flex-col gap-2">
            <Image
              width={100}
              height={100}
              alt="image"
              className=""
              src="https://images.bewakoof.com/t1080/men-s-black-born-to-be-awesome-graphic-printed-oversized-t-shirt-596521-1692014959-5.jpg"
            />
            <Image
              width={100}
              height={100}
              alt="image"
              className=""
              src="https://images.bewakoof.com/t1080/men-s-black-born-to-be-awesome-graphic-printed-oversized-t-shirt-596521-1692014959-5.jpg"
            />
            <Image
              width={100}
              height={100}
              alt="image"
              className=""
              src="https://images.bewakoof.com/t1080/men-s-black-born-to-be-awesome-graphic-printed-oversized-t-shirt-596521-1692014959-5.jpg"
            />
          </div>
        </div>
        {/* main image */}
        <div className="flex-1 h-full w-full p-2">
          <div className=" relative w-full h-full">
            <Image
              fill
              alt="image"
              className="  "
              src="https://images.bewakoof.com/t1080/men-s-black-born-to-be-awesome-graphic-printed-oversized-t-shirt-596521-1692014959-5.jpg"
            />
          </div>
        </div>
      </div>
      {/* right */}
      <div className=" p-2  w-1/2">
        <div className="w-full h-full p-4 ">
          {/* tags */}
          <div className=" flex gap-2">
            <Badge>OverSize</Badge>
            <Badge>Neon Print</Badge>
          </div>
          {/* title */}
          <h1 className="text-3xl mt-2 ml-1 text-neutral-700 font-medium">
            Hero From Hell (Oversized)
          </h1>
          {/* description */}
          <p className=" text-xs mt-2 ml-1 max-w-md leading-5 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            omnis debitis minus expedita ex fuga explicabo a fugiat quam beatae
            similique quasi quis iste, voluptatem alias quae recusandae iure
            iusto!
          </p>
          {/* rating */}
          <p className="mt-5 ml-1">* * * *</p>
          {/* size */}
          <div className="flex gap-2">
            <Badge>XL</Badge>
            <Badge>L</Badge>
            <Badge>M</Badge>
          </div>
          {/* price */}
          <p className="ml-1 mt-4 font-bold text-4xl text-neutral-800">₹200</p>
          {/* Butons */}
          <div className="flex gap-2 mt-16 w-full">
            <Button className="rounded w-1/3 p-6 ">Add to Cart</Button>
            <Button
              variant={"outline"}
              className="rounded border w-1/3 p-6  border-black"
            >
              Add to Wishlist
            </Button>
          </div>

          <hr className="mt-6 w-[80%]" />
          <div>
            <h1 className="text-2xl mt-2 ml-1 text-neutral-700 font-medium">
              Description
            </h1>
            <p className="text-xs mt-2 ml-1 max-w-md leading-5 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              omnis debitis minus expedita ex fuga explicabo a fugiat quam
              beatae similique quasi quis iste, voluptatem alias quae recusandae
              iure iusto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
