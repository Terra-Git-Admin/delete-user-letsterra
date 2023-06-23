"use client"

import React, { useState } from "react"

import localFont from "@next/font/local"

const clashGroteskLight = localFont({ src: "../assets/fonts/ClashGrotesk-Light.otf" })
const clashGroteskMedium = localFont({ src: "../assets/fonts/ClashGrotesk-Medium.otf" })
const clashGroteskBold = localFont({ src: "../assets/fonts/ClashGrotesk-Bold.otf" })

export default function Content() {
  const [userInput, setUserInput] = useState("")
  const [checkbox, setCheckbox] = useState(false)

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked)
  }

  const handleDelete = (e) => {
    console.log("Delete pressed")
    let myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    let raw = JSON.stringify({
      email: userInput,
    });

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

      fetch("http://terra-api-test.letsterra.com/v22/deleteUser", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dataLayer.push({
          event: "DeleteRequestSent",
          user_input: userInput,
        })
      })
      .catch((error) => {
        console.log("error", error)
        dataLayer.push({
          event: "DeleteRequestSent",
          user_input: userInput,
        })
      })

      setUserInput('')
      setCheckbox(!checkbox)
      alert("Delete Reqeust Sent")
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
          className={`bg-black  border-[1px]  w-[100%] p-2 focus:outline-none ${
            userInput ? "border-[#ff1616]" : "border-[#414141]"
          } `}
          value={userInput}
          onChange={handleUserInput}
        />
      </div>
      <div className="select-none">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            className="  border-[#ff1616] border-2 h-5 w-5 bg-slate-800 "
            onChange={handleCheckboxChange}
            checked={checkbox}
          />
          <span className="text-sm">I understand that all my data on Terra will be deleted.</span>
        </label>
      </div>
      <div className="w-[100%]" style={clashGroteskMedium.style}>
        {(!userInput || !checkbox) && (
          <button disabled className="bg-gray-600 w-[100%] p-2 font-clashGrotesk ">
            Delete Your Terra Account
          </button>
        )}
        {userInput && checkbox && (
          <button className="bg-red-600 w-[100%] p-2 font-clashGrotesk " onClick={handleDelete}  >
            Delete Your Terra Account
          </button>
        )}
      </div>
    </div>
  )
}
