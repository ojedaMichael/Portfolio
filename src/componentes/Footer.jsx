import { AiFillGithub } from "react-icons/ai"
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa"
function Footer() {
  return (
    <footer id="Contact" className="bg-slate-800 text-white lg:px-48 px-4 py-20 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-4">
          <span className="text-3xl font-semibold text-[#84e4ff] py-2 uppercase">Michael Ojeda</span>
          <p className="text[16px] my-4">I would love to learn about your interest in my services! Feel free to get in touch with me through the following means. I'm eager to talk to you and discuss how I can assist you.</p> 
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-[#84e4ff] py-2 uppercase">Services</h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">SEO</li>
            <li className="my-2">Frontend developer</li>
            <li className="my-2">Backend developer</li>
            <li className="my-2">Landing page</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-4">
          <h2 className="text-[22px] font-semibold text-[#84e4ff] py-2 uppercase">Contact</h2>
          <p className="text-[16px] my-4">Email: ojedamichael62@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +56 9 4633 0904</p>
        </div>
        <div>
        <h2 className="text-[22px] font-semibold text-[#84e4ff] py-2 uppercase">Follow Me</h2>
        <div className="flex space-x-4">
          <a className="text-white hover:text-[#84e4ff] transition-all duration-150 ease-in-out" href="https://github.com/ojedaMichael">
            <AiFillGithub/>
          </a>
          <a className="text-white hover:text-[#84e4ff] transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/michael-ojeda-327127288/">
            <FaLinkedin/>
          </a>
          <a className="text-white hover:text-[#84e4ff] transition-all duration-150 ease-in-out" href="https://instagram.com/ojedamichael63?igshid=cHN4dWN6aW1sbHAw">
            <FaInstagram/>
          </a>
          <a className="text-white hover:text-[#84e4ff] transition-all duration-150 ease-in-out" href="https://web.facebook.com/profile.php?id=100083087892308">
            <FaFacebook/>
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer