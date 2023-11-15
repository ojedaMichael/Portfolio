import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci"
function Nav() {

  const [click, setClick] = useState(false)
  const handleClick = () => { 
    setClick(!click)
  }
  const content = (
    <>
      <div className="lg:hidden block absolute top-[3.5rem] items-center w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:border-[#84e4ff] cursor-pointer hover:text-[#84e4ff]">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:border-[#84e4ff] cursor-pointer hover:text-[#84e4ff]">About</li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:border-[#84e4ff] cursor-pointer hover:text-[#84e4ff]">Services</li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:border-[#84e4ff] cursor-pointer hover:text-[#84e4ff]">Projects</li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded hover:border-[#84e4ff] cursor-pointer hover:text-[#84e4ff]">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-semibold">Michael Ojeda</span>
        </div>
        <div className="lg:flex ml:flex lg: flex-1 items-center justify-end font-normal hidden ">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-[#84e4ff] transition border-b-2 border-slate-900 hover:border-[#84e4ff] cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-[#84e4ff] transition border-b-2 border-slate-900 hover:border-[#84e4ff] cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-[#84e4ff] transition border-b-2 border-slate-900 hover:border-[#84e4ff] cursor-pointer">Services</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-[#84e4ff] transition border-b-2 border-slate-900 hover:border-[#84e4ff] cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-[#84e4ff] transition border-b-2 border-slate-900 hover:border-[#84e4ff] cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
          <div>
            {click && content}
          </div>
          <button className="block sm:hidden transition" onClick={handleClick} >
            {click ? <FaTimes/> : <CiMenuFries/>}
          </button>
      </div>
    </nav>
  );
}

export default Nav;
