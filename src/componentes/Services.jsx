import { AiOutlineHtml5 } from "react-icons/ai"
import { BiLogoCss3, BiLogoReact, BiLogoTailwindCss, BiLogoJavascript } from "react-icons/bi"
import { FaPhp, FaLaravel } from "react-icons/fa"
import { BsGit } from "react-icons/bs"
import { GrMysql } from "react-icons/gr"
import AOS from "aos"
import "aos/dist/aos.css"

function Services() {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750
  })
  return (
    <div id="Services" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-[#84e4ff]">Services</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20 gap-y-10">
        <h2 data-aos="fade-right" className="glowHtml text-[56px] text-[#37606b] hover:text-[#e5532d] flex items-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#e5532d] "><AiOutlineHtml5/></h2>       
        <h2 data-aos="fade-down" className="glowCss text-[56px] text-[#37606b] hover:text-[#3d9dd6] flex items-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#3d9dd6] "><BiLogoCss3/></h2>
        <h2 data-aos="fade-down" className="glowJS text-[56px] text-[#37606b] hover:text-[#f7e025] flex items-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#f7e025] "><BiLogoJavascript/></h2>
        <h2 data-aos="fade-left" className="glowReac text-[56px] text-[#37606b] hover:text-[#84e4ff] flex items-center content-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#84e4ff] "><BiLogoReact className="logo "/></h2>
        <h2 data-aos="fade-right" className="glowTail text-[56px] text-[#37606b] hover:text-[#1dc0cd] flex items-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#1dc0cd] "><BiLogoTailwindCss/></h2>
        <h2 data-aos="fade-up" className="glowPhp text-[56px] text-[#37606b] hover:text-[#7b7fb5] flex items-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#7b7fb5] "><FaPhp/></h2>
        <h2 data-aos="fade-up" className="glowLaravel text-[56px] text-[#37606b] hover:text-[#ff3427] flex items-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#ff3427] "><FaLaravel/></h2>
        <h2 data-aos="fade-left" className="glowGit text-[56px] text-[#37606b] hover:text-[#f05639] flex items-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#f05639] "><BsGit/></h2>
        <h2 data-aos="fade-up" className="glowSql text-[56px] text-[#37606b] hover:text-[#08668f] flex items-center justify-center font-semibold  rounded-3xl h-24 w-32 border-2 border-[#37606b] hover:border-[#08668f] "><GrMysql/></h2>
      </div>
    </div>
  )
}

export default Services