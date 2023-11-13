import image from "../assets/perfil2.png";
import AOS from "aos"
import "aos/dist/aos.css"

function About() {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750
  })
  return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img
        data-aos="fade-down"
        src={image}
        width={290}
        height={290}
        className="rounded-[30%] bg-slate-800 border-2 p-1 border-fuchsia-500 img_glow"
        alt=""
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">
          About Me
        </h1>
        <p data-aos="fade-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          impedit autem in nemo iure veritatis nisi officiis, aliquid ipsam.
          Officiis eligendi ipsum neque fuga, incidunt minima sunt veniam
          voluptatum nesciunt.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button data-aos="fade-up" className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-4 uppercase relative overflow-hidden">
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
