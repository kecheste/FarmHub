import Nav from "@/components/Nav";
import Product from "@/components/Product";
import React from "react";

function Main() {
  return (
    <section className="bg-[#C7E2C2] h-screen pt-2 px-2">
      <div className="bg-[#e4f1e2] rounded-md">
        <Nav />
        <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4 p-4">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
}

export default Main;
