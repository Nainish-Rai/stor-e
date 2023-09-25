import ProductContent from "@/app/components/ProductContent";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="w-full h-screen pt-16">
      <ProductContent />
    </div>
  );
}

export default page;
