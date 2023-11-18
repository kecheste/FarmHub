import Nav from "@/components/Nav";
import Image from "next/image";
import React from "react";

function Product() {
  return (
    <section className="bg-[#C7E2C2] h-screen pt-2 px-2">
      <Nav />
      <div className="bg-[#e4f1e2] rounded-md h-auto p-2">
        <div className="w-full flex flex-col">
          <Image
            src="/apple.jpg"
            width={300}
            height={400}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
          <p className="font-bold text-green-900 mt-2 text-[30px]">
            Product title{" "}
            <span className="font-semibold">(product subtitle)</span>{" "}
          </p>
          <div className="flex justify-between mt-1 text-[20px] text-green-800 font-semibold">
            <p>4.5</p>
            <p>********</p>
          </div>
          <p className="font-semibold  mt-1 text-green-800">13,000 ratings</p>

          <p className="text-green-800  mt-1 font-bold">20 $/Kg</p>

          <div className="flex justify-between  mt-1 text-green-800 font-semibold">
            <p>Askale</p>
            <p>Addis</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
