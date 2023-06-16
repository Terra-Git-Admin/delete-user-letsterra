import localFont from "@next/font/local"
import Link from 'next/link'

import heroImage from "./assets/images/heroImage.png"
import redLogo from "./assets/images/redLogo.png"

const clashGroteskLight = localFont({ src: "./assets/fonts/ClashGrotesk-Light.otf" })
const clashGroteskMedium = localFont({ src: "./assets/fonts/ClashGrotesk-Medium.otf" })
const clashGroteskBold = localFont({ src: "./assets/fonts/ClashGrotesk-Bold.otf" })

export default function Home() {
  return (
    <div className="bg-image"    style={clashGroteskLight.style}>
      <div className="flex flex-col justify-between  min-h-[100vh] w-[100%]">
        <div className="flex justify-around items-center h-28 bg-black">
          <img src={redLogo.src} alt="terra-logo " className="w-44" />
          <div
            className="bg-[#ffff19] p-2 rounded-lg  font-bold text-xl text-[#2b2a2a] px-4"
            style={clashGroteskMedium.style}
          >
            <Link href='https://www.letsterra.com/'><button>Download Terra</button> </Link>
          </div>
        </div>
        <div className="grow bg-image bg-top flex justify-center items-center">
          <div className=" flex-col-reverse  flex md:flex-row  justify-center">
            <div className=" flex justify-center items-center flex-col  md:max-w-[30%] p-10 md:p-5 ">
              <div className="font-clash text-xl   text-white flex flex-col justify-center gap-6 ">
                <div className="text-3xl "    style={clashGroteskMedium.style}>
                  <h1>Do You Want To Delete Your Terra Account?</h1>
                </div>
                <div className="flex flex-col gap-2 ">
                  <h1 className="text-sm">Username / Invite Code*</h1>
                  <input
                    type="text"
                    className="bg-black border-[#ff1616] border-[1px]  w-[100%] p-2 focus:outline-none "
                  />
                </div>
                <div className="select-none">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="  border-[#ff1616] border-2 h-5 w-5 bg-slate-800 " />
                    <span className="text-sm">I undrstand that all my data on Terra will be deleted</span>
                  </label>
                </div>
                <div className="w-[100%]"  style={clashGroteskMedium.style}>
                  <button className="bg-red-600 w-[100%] p-2 font-clashGrotesk ">Delete Your Terra Account</button>
                </div>
              </div>
            </div>
            <div className="md:max-w-[50%] p-5 md:p-0 flex justify-center items-center">
              <img src={heroImage.src} alt="some-image" className="" />
            </div>
          </div>
        </div>
        <div className="h-28 bg-[#d3b83e] flex justify-center items-center  ">
          <div className="flex flex-col justify-center items-center">
            
            <a  className="underline font-bold " style={clashGroteskMedium.style} href = "mailto: hello@letsterra.com">hello@letsterra.com</a>
            <h1>© TerraByte Inc & TerraByte India Pvt Ltd, 2023</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
