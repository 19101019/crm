'use client'
import Image from "next/image";
import '../dashboard-in/page.css';
import React, { useState } from 'react';
import Link from "next/link";
export default function emailverified() {
  const [modalOpen, setModalOpen] = useState(true); // Initially set to true to open the modal
  const [imageUrl, setImageUrl] = useState('/Group 381.png');
  // Function to close the modal
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <main>
      {modalOpen && ( // Render modal only if modalOpen state is true
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg p-8">

            <div className="flex justify-center">
              <p className="text-slate-900 font-semibold text-xl">Add Company Logo</p>
            </div>
            <div className="flex justify-center py-4">
      <label htmlFor="image-upload" className="cursor-pointer">
        <img
          src={imageUrl}
          alt="My SVG"
          width={150}
          height={150}
          className="w-24 h-24 rounded-full border-1 border-gray-200"
        />
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/png, image/jpeg, image/svg+xml"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
            <div className="flex justify-center">
              <div className="text-slate-900 " id="fix">Supported formats: JPEG, PNG, GIF, MP4, PDF,</div>
            </div>

            <div className="flex justify-center">

              <form action="" className="grid space-y-6 w-72 py-4">
                <label className="text-slate-800 pb-2">Company Name</label>
                <input
                  type="comname"
                  className="h-10 rounded-md px-3 py-6 border text-sm focus:outline-none"
                  style={{ margin: 0, border: "1px solid #D5D5D5" }}
                  placeholder="Company Name"
                />
              <Link href="/welcome" > <button
                 
                  className="h-11 w-72 font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-base rounded-md my-4">
                  Submit
                </button>
                </Link>  

              </form>
            </div>
          </div>

        </div>

      )}
      <div className="justify-center flex-center bg-gradient-to-r from-cyan-400 to-sky-400 items-center  m-0 p-0">
        <div className="desktop justify-center flex-center">
          <div className="flex w-full min-h-screen  justify-center flex-center">
          <div className=" w-2/3 flex justify-center items-center">
  <div className="rounded-lg bg-white w-4/5 justify-center flex-center p-8">
    <div className="flex justify-center items-center">
      <Image
        src="/image2.svg"
        alt="My SVG"
        width={100}
        height={100}
        className="pt-16"
      />
    </div>
    <div className="flex justify-center flex-center pt-2">
      <Image src="/ver.png" width={500} height={250} />
    </div>
    <div className="flex justify-center flex-center pt-12">
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
      <p className="font-extrabold text-slate-900 text-4xl pt-4">
        Hello, Igniculuss
      </p>
      &nbsp;
      <Image src="/hand.png" width={70} height={0} />
    </div>
    <div className="flex justify-center flex-center">
      <p className="text-center text-base leading-6 w-1/2 pt-2 pb-20 text-slate-500">
        Skip repetitive and manual sales-marketing tasks. Get highly productive
        through automation and save tons of time!
      </p>
    </div>
  </div>
</div>

            <div className="w-full lg:w-1/3 flex items-center bg-white justify-center py-6 my-0">
            <div className=" w-2/3 max-w-container ">
            <a href="" className="mt-12 flex items-center gap-1">
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
                <span className="text-slate-950 font-bold text-2xl py-6">
                  Verify Your Sign-up
                </span>
              </a>
              <p className="text-slate-800">
                Enter the one-time password sent to your Email ID.
              </p>
              <div className="mx-auto">
                <form action="" className="grid space-y-6">
                  <div className="flex justify-between mt-12 py-6">
                    <div className="text-left  text-slate-950 font-bold">
                      Shubham123@gmail.com
                    </div>
                   
                     
                      <div className="text-right text-cyan-600 no-underline">
                      <Link href="/change"> Change</Link>
                      </div>
                    
                  </div>
                  <input
                    type="otp"
                    className="h-10 rounded-md px-3  border text-xs focus:outline-none"
                    style={{ margin: 0, border: "1px solid #D5D5D5" }}
                    placeholder="XXX XXX"
                  />
                   <div className="flex justify-between m-0 pb-12">
                    <div className="text-left text-slate-950 ">
                   Resend
                    </div>
                    <a>
                      {" "}
                      <div className="text-right text-cyan-600 no-underline">
                        Choose Other Way
                      </div>
                    </a>
                  </div>
                  <Link href="/email-verified">
                  <button className="h-11 w-full font-medium bg-cyan-400 hover:bg-cyan-500 text-gray-100 text-base rounded-md">
                   Verify
                  </button>
                  </Link>
                
                  <p class="text-center text-sm pb-12 font-medium text-gray-600">
                    OTP Sent Successfully
                 
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
    </main>
  );
}
