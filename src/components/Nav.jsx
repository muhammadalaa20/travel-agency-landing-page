import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useState } from 'react'
export default function Nav() {
    const [theme, setTheme] = useState("false")

    const darkModeHandler = () => {
      setTheme(!theme)
      document.body.classList.toggle("dark")
    }
    return (
        <div className="desktop-nav p-3 flex justify-between items-center w-full">
            <div className="logo flex items-center gap-3 cursor-pointer">
                <img src="/plane.svg" alt="plane"  className="w-12"/>
                <h1 className="text-3xl font-medium text-white">Travellien</h1>
            </div>
            <div className="desktop-nav-links p-3">
                <ul className="flex items-center gap-8 text-white font-medium ">
                  <li><a href="/" className="hover:text-primary transition-all">Home</a></li>
                  <li><a href="#Explore" className="hover:text-primary transition-all">Explore</a></li>
                  <li> <a href="#Travel" className="hover:text-primary transition-all">Travel</a></li>
                  <li> <a href="#Plog" className="hover:text-primary transition-all">Plog</a></li>
                  <li> <a href="#Pricing" className="hover:text-primary transition-all">Pricing</a></li>
                </ul>
            </div>

            <div className="buttons flex items-center gap-x-8">

            <button onClick={darkModeHandler} className='text-3xl hover:text-primary'>
                    {theme ? <IoMoon/> : <IoSunny/>}
            </button> 

            <button className="py-2 px-5 rounded-lg login-btn text-white hover:bg-primary">
              Login
            </button>

            <button className="py-2 px-4 rounded-lg signup-btn text-white bg-black hover:bg-primary">
              Sign up
            </button>

          </div>
        </div>
    )
}