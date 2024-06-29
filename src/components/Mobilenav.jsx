import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";

export default function Mobilenav() {
  const [theme, setTheme] = useState("false")
  const [menu, setMenu] = useState(false)
  const darkModeHandler = () => {
    setTheme(!theme)
    document.body.classList.toggle("dark")
  }
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <>
      <div className="flex justify-between items-start w-full ">
        <div className="p-3 logo flex items-center gap-3 cursor-pointer ">
          <img src="/plane.svg" alt="plane" className="w-8" />
          <h1 className="text-1xl font-medium text-white">Travellien</h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <button className="text-2xl py-2 px-4 text-black dark:text-white hover:bg-primary dark:hover:bg-black rounded-lg">
              <IoLogInOutline />
            </button>
          </div>
          <div className={`text-2xl ${menu ? "hidden" : "block"} p-4 dark:text-white cursor-pointer`} onClick={toggleMenu}>
            <CiMenuFries />
          </div>
        </div>


        <div className={`mobile-nav-links ${menu ? "block" : "hidden"}  bg-white dark:bg-slate-800 min-h-screen fixed top-0 right-0`}>
          <div className="mobile-nav">
            <div className='flex justify-between items-center  p-4 gap-x-32 w-full'>
              <button onClick={darkModeHandler} className='text-2xl dark:text-white'>
                {theme ? <IoMoon /> : <IoSunny />}
              </button>
              <button onClick={toggleMenu} className='text-2xl dark:text-white'>
                <IoClose />
              </button>
            </div>
            <div className="desktop-nav-links p-3 ">
              <ul className="flex items-center gap-5 text-black dark:text-white font-medium flex-col">
                <li><a href="/" className="hover:text-primary transition-all" onClick={toggleMenu}>Home</a></li>
                <li><a href="#Explore" className="hover:text-primary transition-all" onClick={toggleMenu}>Explore</a></li>
                <li><a href="#Travel" className="hover:text-primary transition-all" onClick={toggleMenu}>Travel</a></li>
                <li><a href="#Plog" className="hover:text-primary transition-all" onClick={toggleMenu}>Plog</a></li>
                <li><a href="#Pricing" className="hover:text-primary transition-all" onClick={toggleMenu}>Pricing</a></li>
              </ul>
              <div className="flex flex-col gap-2 py-5">
                <button className="py-2 px-4 rounded-lg signup-btn text-white bg-black hover:bg-primary">
                  Sign up
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}