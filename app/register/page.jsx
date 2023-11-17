import Link from "next/link";
import React from "react";

function Register() {
  return (
    <section className="md:bg-[#C7E2C2] h-screen">
      <div className="flex justify-center">
        <div className="flex w-full h-screen items-center justify-center">
          <form
            action=""
            className="flex items-center w-full md:w-3/6 flex-col bg-white md:rounded-2xl px-6 md:px-10 py-6 md:py-10"
          >
            <label className="label" htmlFor="username">
              Username
            </label>
            <input className="input" type="text" id="username" />
            <label className="label" htmlFor="phone">
              Phone
            </label>
            <input className="input" type="phone" id="phone" />
            <label className="label" htmlFor="region">
              Region
            </label>
            <input className="input" type="text" id="region" />
            <label className="label" htmlFor="password">
              Password
            </label>
            <input className="input" type="password" id="password" />
            <label className="label" htmlFor="password1">
              Confirm password
            </label>
            <input className="input" type="password" id="password1" />
            <button
              className="md:text-3xl text-2xl text-green-800 mt-6 font-bold"
              type="submit"
            >
              Sign up
            </button>
            <p className="mt-2 text-green-700">
              Already have an account?{" "}
              <span className="font-bold underline">
                {" "}
                <Link href="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
