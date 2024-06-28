import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


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
                <img src="/plane.svg" alt="plane"  className="w-8"/>
                <h1 className="text-1xl font-medium text-white">Travellien</h1>
      </div>
      <div className={`text-2xl ${menu ? "hidden" : "block"} p-4 `} onClick={toggleMenu}>
      <CiMenuFries />
      </div>
      
      <div className={`mobile-nav-links ${menu ? "block" : "hidden"}  bg-white min-h-screen fixed top-0 right-0`}>  
        <div className="mobile-nav">
          <div className='flex justify-between items-center  p-4 gap-x-32 w-full'>
            <button onClick={darkModeHandler} className='text-2xl'>
              {theme ? <IoMoon/> : <IoSunny/>}
            </button>  
            <button onClick={toggleMenu} className='text-2xl'>
            <IoClose />
            </button>
          </div>
          <div className="desktop-nav-links p-3 ">
                <ul className="flex items-center gap-8 text-black font-medium flex-col">
                  <li><a href="/" className="hover:text-primary transition-all" onClick={toggleMenu}>Home</a></li>
                  <li><a href="#Explore" className="hover:text-primary transition-all" onClick={toggleMenu}>Explore</a></li>
                  <li><a href="#Travel" className="hover:text-primary transition-all" onClick={toggleMenu}>Travel</a></li>
                  <li><a href="#Plog" className="hover:text-primary transition-all" onClick={toggleMenu}>Plog</a></li>
                  <li><a href="#Pricing" className="hover:text-primary transition-all" onClick={toggleMenu}>Pricing</a></li>
                </ul>
            </div>
        </div>
      
      </div>
      </div>
  </>
      
    )
}