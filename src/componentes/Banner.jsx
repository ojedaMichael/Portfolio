import { AiFillGithub } from "react-icons/ai"
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"

import image from "../assets/perfil2.png"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function Banner() {
 
  useEffect(()=>{

    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750
    })
  },[])
  
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1  data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome To <span className="text-[#84e4ff]">My WebSite</span></h1>
        <p data-aos="fade-left" >Welcome to my portfolio! I'm a 22-year-old web developer specializing in both frontend and backend development. With strong skills in HTML5, CSS3, JavaScript, React, Tailwind, PHP, Laravel, MySQL, and Git, I'm ready to craft captivating web experiences.</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="https://github.com/ojedaMichael" className="text-[#84e4ff] hover:text-[#84e4ff] rounded-full glow p-2 ">
                <AiFillGithub className="text-[28px]"/>
              </a>
              <a href="https://www.linkedin.com/in/michael-ojeda-327127288/" className="text-[#84e4ff] hover:text-[#84e4ff] rounded-full glow p-2 ">
                <FaLinkedin className="text-[28px]"/>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100083087892308" className="text-[#84e4ff] hover:text-[#84e4ff] rounded-full glow p-2 ">
                <FaFacebook className="text-[28px]"/>
              </a>
              <a href="https://instagram.com/ojedamichael63?igshid=cHN4dWN6aW1sbHAw" className="text-[#84e4ff] hover:text-[#84e4ff] rounded-full glow p-2 ">
                <FaInstagram className="text-[28px]"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img  data-aos="fade-up" src={image} width={290} height={290} className="rounded-[30%] bg-slate-800 border-2 p-1 border-[#84e4ff]  img_glow" alt="" />
    </div>
  )
}

export default Banner