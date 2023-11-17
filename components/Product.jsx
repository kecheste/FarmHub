import Image from "next/image";
import React from "react";

function Product() {
  return (
    <div className="hover:shadow-md shadow-sm p-2 border bg-slate-50 rounded-md flex flex-col">
      <div className="mb-2">
        <Image
          src="/apple.jpg"
          width={200}
          height={200}
          style={{ width: "100%", height: "auto" }}
          alt=""
        />
      </div>
      <p>
        Product name <span>(product description)</span>
      </p>
      <div className="flex justify-between">
        <p>$4.5</p>
        <p>Addis</p>
      </div>
      <p>4.5Kg</p>
      <div className="flex justify-between">
        <p>4.5</p>
        <p>********</p>
      </div>
    </div>
  );
}

export default Product;
