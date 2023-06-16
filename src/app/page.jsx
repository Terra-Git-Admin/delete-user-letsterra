import localFont from "@next/font/local"
import Link from "next/link"

import heroImage from "./assets/images/heroImage.png"
import redLogo from "./assets/images/redLogo.png"

import Content from "./components/Content"

const clashGroteskLight = localFont({ src: "./assets/fonts/ClashGrotesk-Light.otf" })
const clashGroteskMedium = localFont({ src: "./assets/fonts/ClashGrotesk-Medium.otf" })
const clashGroteskBold = localFont({ src: "./assets/fonts/ClashGrotesk-Bold.otf" })

export default function Home() {
  return (
    <div className="bg-image" style={clashGroteskLight.style}>
      <div className="flex flex-col justify-between  min-h-[100vh] w-[100%]">
        <div className="flex justify-around items-center h-24 md:h-28 bg-black">
          <img src={redLogo.src} alt="terra-logo " className="w-36 md:w-44" />
          <div
            className="  font-bold text-base md:text-xl text-[#2b2a2a] md:hover:scale-105 transition "
            style={clashGroteskMedium.style}
          >
            <Link href="https://www.letsterra.com/">
              <button className="px-4 rounded-lg p-2 bg-[#ffff19] ">Download Terra</button>
            </Link>
          </div>
        </div>
        <div className="grow bg-image bg-top flex justify-center items-center">
          <div className=" flex-col-reverse  flex md:flex-row  justify-center">
            <div className=" flex justify-center items-center flex-col  md:max-w-[30%] p-5 md:p-5 ">
              <Content />
            </div>
            <div className=" p-5 -my-16 md:p-0  md:max-w-[50%]   flex justify-center items-center">
              <img src={heroImage.src} alt="some-image" className="" />
            </div>
          </div>
        </div>
        <div className=" h-24 md:h-28 bg-[#d3b83e] flex justify-center items-center  text-[#383838] ">
          <div className="flex flex-col justify-center items-center">
            <a className="underline font-bold " style={clashGroteskMedium.style} href="mailto: hello@letsterra.com">
              hello@letsterra.com
            </a>
            <h1>© TerraByte Inc & TerraByte India Pvt Ltd, 2023</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
