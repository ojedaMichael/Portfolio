//import { useState } from "react"
import image from "../assets/imgProject.png"
import image2 from "../assets/imgProject2.png"
import image3 from "../assets/imgProject3.png"
import image4 from "../assets/imgProject4.png"

function Projects() {
 //const[isOpen, setIsOpen] = useState(false)
  
  
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-down"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-[#84e4ff]"
      >
        projects
      </h1>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-20">
        <div
          data-aos="fade-right"
          className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-around gap-20 gap-y-10"
        >
          <a href="https://github.com/ojedaMichael/windbnbMiniProyect">
          <img
          // onClick={() => setIsOpen(true)}
            className="glow flex items-center justify-center font-semibold p-1 rounded-3xl h-40 w-50 border-2 border-[#84e4ff] "
            src={image}
            alt=""
          />
          </a>
          <a href="https://github.com/ojedaMichael/ProyectoFinalReact">
          <img
            className="glow flex items-center justify-center font-semibold p-1 rounded-3xl h-40 w-50 border-2 border-[#84e4ff] "
            src={image2}
            alt=""
          />
          </a>
         
        </div>

        <div
          data-aos="fade-left"
          className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-around gap-20 gap-y-10"
        >
          <a href="https://github.com/ojedaMichael/UniversityPHP">
          <img
            className="glow flex items-center justify-center font-semibold p-1 rounded-3xl h-40 w-50 border-2 border-[#84e4ff] "
            src={image3}
            alt=""
          />
          </a>
          
          <a href="https://github.com/ojedaMichael/TodoAppVanilla">
          <img
          // onClick={() => setIsOpen(true)}
            className="glow flex items-center justify-center font-semibold p-1 rounded-3xl h-40 w-50 border-2 border-[#84e4ff] "
            src={image4}
            alt=""
          />
          </a>
         
        </div>
      </div>

      

      
    </div>
  );
}

export default Projects