export default function Home() {
  return (
    <div className="bg-image">
      <div className="flex flex-col justify-between  min-h-[100vh] w-[100%]">
        <div className="flex justify-around items-center h-28 bg-black">
          <img src="red_logo.png" alt="terra-logo " className="w-44" />
          <div className="bg-[#ffff19] p-2 rounded-lg font-clash font-bold text-xl text-[#2b2a2a]">
            <button>Download Terra</button>
          </div>
        </div>
        <div className="grow bg-image bg-top flex justify-center items-center">
          <div className="flex justify-center">
            <div className=" flex justify-center items-center flex-col max-w-[30%] p-20 ">
              <div className="font-clash text-xl   text-white flex flex-col justify-center gap-6 ">
                <div className="text-3xl">
                  <h1>Do You Want To Delete Your Terra Account?</h1>
                </div>
                <div>
                <h1 className="text-sm" >Username / Invite Code*</h1>
                <input type="text" className="bg-black border-[#ff1616] border-2  w-[100%] p-2 focus:outline-none " />
                </div>
                <div className="select-none">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="  border-[#ff1616] border-2 h-5 w-5 bg-slate-800 " />
                    <span className="text-sm">I undrstand that all my data on Terra will be deleted</span>
                  </label>
                </div>
                <div className="w-[100%]   ">
                  <button className="bg-red-600 w-[100%] p-2 ">Delete Your Terra Account</button>
                </div>
              </div>
            </div>
            <div className="max-w-[50%] ">
              <img src="delete-page-image.webp" alt="some-image" className="" />
            </div>
          </div>
        </div>
        <div className="h-28 bg-[#d3b83e] flex justify-center items-center  ">
          <div className="flex flex-col justify-center items-center">
            <h1>hello@letsterra.com</h1>
            <h1>© TerraByte Inc & TerraByte India Pvt Ltd, 2023</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
