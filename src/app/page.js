import Image from "next/image";
import "../../style/Home.module.css";
import Link from 'next/link';
// import PhoneInput from 'react-phone-input-2';
// import '../../node_modules/react-phone-input-2/lib/material.css';

export default function Home() {
  return (
    <>   
    <div className="justify-center flex-center bg-gradient-to-r from-cyan-400 to-sky-400 items-center  m-0 p-0">
      <div className="desktop justify-center flex-center">
        <div className="flex w-full min-h-screen  justify-center flex-center   ">
        <div className=" w-2/3 flex justify-center items-center ">
        <div class="rounded-lg bg-white w-2/3 p-8">
    <div class="flex justify-center items-center">
      <img
        src="/image2.svg"
        alt="My SVG"
        width="100"
        height="100"
        class="pt-16"
      />
    </div>
    <div class="flex justify-center">
      <img src="/image2.png" width="500" height="250" />
    </div>
    <div class="flex justify-center items-center pt-12">
      <svg
        width="36"
        height="46"
        viewBox="0 0 36 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 23C9.94113 23 18 12.7025 18 0C18 12.7025 26.0589 23 36 23C26.0589 23 18 33.2975 18 46C18 33.2975 9.94113 23 0 23Z"
          fill="#02A7CC"
        />
      </svg>
      &nbsp;
      <p class="font-extrabold text-slate-900 text-4xl pt-4">
        Hello, Igniculuss
      </p>
      &nbsp;
      <img src="/hand.png" width="70" />
    </div>
    <div class="flex justify-center">
      <p class="text-center text-base leading-6 w-1/2 pt-2 pb-16 text-slate-500">
        Skip repetitive and manual sales-marketing tasks. Get highly productive
        through automation and save tons of time!
      </p>
    </div>
  </div>
</div>

<div className="w-1/3  flex items-center bg-white justify-center ">
              <div className=" w-2/3 max-w-container">
                <a href="" className="my-12 lg:mb-8 flex items-center gap-1">
                  <svg
                    width="32"
                    height="40"
                    viewBox="0 0 32 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 20C8.83656 20 16 11.0457 16 0C16 11.0457 23.1634 20 32 20C23.1634 20 16 28.9543 16 40C16 28.9543 8.83656 20 0 20Z"
                      fill="#282828"
                    />
                  </svg>
                  <span className="text-slate-950 font-bold text-2xl">
                    Log In{" "}
                  </span>
                </a>

                <div className="mx-auto">
                  <form action="" className="grid space-y-6">
                    <label className="text-slate-800 pb-2"> User Name</label>
                    <input
                      type="email"
                      className="h-10 rounded-md px-3 py-6 border text-xs focus:outline-none"
                      style={{ margin: 0, border: "1px solid #D5D5D5" }}
                      placeholder="User Name"
                    />
                    <label className="text-slate-800 pb-2 ">Password</label>
                    <input
                      type="email"
                      className=" h-10 rounded-md  px-3 py-6 border  text-xs focus:outline-none "
                      style={{ margin: 0, border: "1px solid #D5D5D5" }}
                      placeholder="0123456789"
                    />
                    {/* <PhoneInput
                      inputStyle={{ color: 'green' }}
                      containerStyle={{ margin: '20px' }}
                      buttonStyle={{}}
                      dropdownStyle={{ height: '50px' }}
                      country={"us"}
                      value="1425652"
                      onChange={phone => console.log({ phone })}
                    /> */}
                    <Link href="/verify">
                      <button className="h-11 w-full font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-base rounded-md">
                        Submit
                      </button>
                    </Link>
                    <div class="relative text-center py-4">
                      <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                      </div>
                      <div class="relative inline-block px-4 bg-white text-slate-800">
                        Or log in with
                      </div>
                    </div>
                    <Link href="/google">
                      <button
                        className="h-11 w-full flex items-center justify-center font-medium  text-gray-700 text-medium rounded-md"
                        style={{ border: "1px solid #D5D5D5" }}
                      >
                        <svg
                          width="16px"
                          viewBox="-3 0 262 262"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid"
                        >
                          <path
                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                            fill="#4285F4"
                          />
                          <path
                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                            fill="#34A853"
                          />
                          <path
                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                            fill="#FBBC05"
                          />
                          <path
                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                            fill="#EB4335"
                          />
                        </svg>
                        &nbsp; Continue with Google
                      </button>
                    </Link>
                    <p class="text-center text-xs pb-12 text-gray-600">
                      Don’t have an Account?
                      <Link
                        class="font-semibold  text-cyan-700 no-underline"
                        href="/login"
                      >
                        &nbsp; Create Account
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>


        </div>
      </div>

      <div className="mobile m-0 p-0 ">
        <div className=" flex justify-center items-center pt-6 pb-2">
          <Image
            src="/image2.svg"
            alt="My SVG"
            width={70}
            height={70}
            className="pt-4"
          />
        </div>

        <div className="rounded-lg bg-white mx-3 py-6 mb-0 ">
          <div className="px-4 sm:px-0 w-full max-w-container">
            <a href="" className="mb-6 lg:mb-8 flex items-center gap-1">
              <span className="text-slate-950 font-bold text-2xl">
                Log In{" "}
              </span>
            </a>

            <div className="mx-auto">
              <form action="" className="grid space-y-6">
                <label className="text-slate-800 pb-2 font-semibold text-sm">
                  {" "}
                  User Name
                </label>
                <input
                  type="email"
                  className="h-10 rounded-md px-3 py-6 border text-xs focus:outline-none"
                  style={{ margin: 0, border: "1px solid #D5D5D5" }}
                  placeholder="User Name"
                />
                <label className="text-slate-800 pb-2 font-semibold text-sm">
                  Password
                </label>
                <input
                  type="email"
                  className=" h-10 rounded-md  px-3 py-6 border  text-xs focus:outline-none "
                  style={{ margin: 0, border: "1px solid #D5D5D5" }}
                  placeholder="0123456789"
                />

                <button className="h-11 font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-lg rounded-md">
                  Submit
                </button>
                <div class="relative text-center py-4">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative inline-block px-4 bg-white text-slate-800">
                    Or log in with
                  </div>
                </div>
                <button
                  className="h-11 flex items-center justify-center font-medium  text-gray-700 text-medium rounded-3xl"
                  style={{ border: "1px solid #333333" }}
                >
                  <svg
                    width="16px"
                    viewBox="-3 0 262 262"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                      fill="#4285F4"
                    />
                    <path
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                      fill="#34A853"
                    />
                    <path
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                      fill="#FBBC05"
                    />
                    <path
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                      fill="#EB4335"
                    />
                  </svg>
                  &nbsp; Continue with Google
                </button>
                <p class="text-center text-xs  text-gray-600">
                  Don’t have an Account?
                  <br />
                  <a
                    class="font-semibold  no-underline text-lg"
                    href=""
                    style={{ color: "#04A8CB" }}
                  >
                    &nbsp; Create Account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}
