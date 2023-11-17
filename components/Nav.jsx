import Image from "next/image";
import React from "react";

function Nav() {
  return (
    <section>
      <div className="flex w-full justify-between items-center p-2">
        <Image width={30} height={30} alt="" src="/menu.svg" />
        <div className="flex items-center relative">
          <Image
            width={30}
            height={30}
            alt=""
            className="absolute right-0"
            src="/search.svg"
          />
          <input
            autoComplete="off"
            className="outline-none text-green-900 px-2 py-1 md:w-full min-w-[260px] rounded-md"
            type="text"
          />
        </div>
        <Image width={30} height={30} alt="" src="/cart.svg" />
        <Image width={30} height={30} alt="" src="/filter.svg" />
      </div>
    </section>
  );
}

export default Nav;
