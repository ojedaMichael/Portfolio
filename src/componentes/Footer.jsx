import { AiFillGithub } from "react-icons/ai"
import { FaLinkedin, FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
function Footer() {
  return (
    <footer id="Contact" className="bg-slate-800 text-white lg:px-48 px-4 py-20 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-4">
          <span className="text-3xl font-semibold text-fuchsia-700 py-2 uppercase">Michael Ojeda</span>
          <p className="text[16px] my-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repudiandae maiores laudantium praesentium mollitia dolorem, sit nemo ipsam reprehenderit quaerat esse? Molestias officiis, velit odit explicabo in porro eligendi eaque?</p> 
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-700 py-2 uppercase">Services</h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">SEO</li>
            <li className="my-2">Frontend developer</li>
            <li className="my-2">Backend developer</li>
            <li className="my-2">Landing page</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-4">
          <h2 className="text-[22px] font-semibold text-fuchsia-700 py-2 uppercase">Contact</h2>
          <p className="text-[16px] my-4">Email: ojedamichael62@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +56 9 4633 0904</p>
        </div>
        <div>
        <h2 className="text-[22px] font-semibold text-fuchsia-700 py-2 uppercase">Follow Me</h2>
        <div className="flex space-x-4">
          <a className="text-white hover:text-fuchsia-700 transition-all duration-150 ease-in-out" href="">
            <AiFillGithub/>
          </a>
          <a className="text-white hover:text-fuchsia-700 transition-all duration-150 ease-in-out" href="">
            <FaLinkedin/>
          </a>
          <a className="text-white hover:text-fuchsia-700 transition-all duration-150 ease-in-out" href="">
            <FaInstagram/>
          </a>
          <a className="text-white hover:text-fuchsia-700 transition-all duration-150 ease-in-out" href="">
            <FiTwitter/>
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer