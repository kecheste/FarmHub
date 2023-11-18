import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <section>
      <div className="flex w-full justify-between items-center p-2 md:p-4">
        <Image
          width={30}
          height={30}
          alt=""
          src="/menu.svg"
          className="cursor-pointer"
        />
        <div className="flex items-center relative">
          <Image
            width={30}
            height={30}
            alt=""
            className="absolute right-0 cursor-pointer"
            src="/search.svg"
          />
          <input
            autoComplete="off"
            placeholder="Search products..."
            className="outline-none text-green-900 px-2 py-1 md:w-[500px] min-w-[260px] rounded-md"
            type="text"
          />
        </div>
        <div className="flex w-20 md:w-32 justify-between items-center">
          <Image
            width={30}
            height={30}
            alt=""
            src="/filter.svg"
            className="cursor-pointer"
          />
          <Image
            width={30}
            height={30}
            alt=""
            src="/cart.svg"
            className="cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Nav;
