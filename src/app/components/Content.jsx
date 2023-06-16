"use client"

import React, { useState } from "react"

import localFont from "@next/font/local"

const clashGroteskLight = localFont({ src: "../assets/fonts/ClashGrotesk-Light.otf" })
const clashGroteskMedium = localFont({ src: "../assets/fonts/ClashGrotesk-Medium.otf" })
const clashGroteskBold = localFont({ src: "../assets/fonts/ClashGrotesk-Bold.otf" })

export default function Content() {
  const [username, setUsername] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  const handleUserInput = (e) => {
    setUsername(e.target.value)
  }

  const handleCheckboxChange = (e) => {
   
    setCheckbox(e.target.checked)
  }

  const handleDelete = (e) => {
    console.log('Delete')
  }

  return (
    <div className="font-clash text-xl   text-white flex flex-col justify-center gap-6 ">
      <div className="text-3xl " style={clashGroteskMedium.style}>
        <h1>Do You Want To Delete Your Terra Account?</h1>
      </div>
      <div className="flex flex-col gap-2 ">
        <h1 className="text-sm">Username / Invite Code*</h1>
        <input
          type="text"
          className={`bg-black  border-[1px]  w-[100%] p-2 focus:outline-none ${username? "border-[#ff1616]" :"border-[#414141]" } `}
          value={username}
          onChange={handleUserInput}
        />
      </div>
      <div className="select-none">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            className="  border-[#ff1616] border-2 h-5 w-5 bg-slate-800 "
            onChange={handleCheckboxChange}
            value={checkbox}
          />
          <span className="text-sm">I undrstand that all my data on Terra will be deleted</span>
        </label>
      </div>
      <div className="w-[100%]" style={clashGroteskMedium.style}>
        {(!username || !checkbox )&& <button disabled className="bg-gray-600 w-[100%] p-2 font-clashGrotesk ">Delete Your Terra Account</button>}
        {username && checkbox && <button className="bg-red-600 w-[100%] p-2 font-clashGrotesk " onClick={handleDelete} >Delete Your Terra Account</button>}
      </div>
    </div>
  )
}
