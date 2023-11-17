import React from "react";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <section className="bg-[#C7E2C2] h-screen">
      <div className="flex justify-center">
        <div className="flex h-screen flex-col items-center justify-center">
          <Image
            className="shadow-md"
            alt=""
            priority={true}
            src="/flogo.png"
            width={200}
            height={200}
          />
          <Link
            className="text-white md:mt-10 mt-20 font-bold bg-green-300 hover:bg-green-400 text-lg shadow-md transition duration-300 rounded-full px-6 cursor-pointer py-2"
            href="/register"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
