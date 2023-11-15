
import { useEffect, useState } from 'react'
import About from './componentes/About'
import Banner from './componentes/Banner'
import Footer from './componentes/Footer'
import Nav from './componentes/Nav'
import Projects from './componentes/Projects'
import Services from './componentes/Services'
import { Triangle } from 'react-loader-spinner'



function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)

    },2000 )
  } ,[])
  return (
    <>
      
      {loading ? (
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <Triangle
            height="80"
            width="80"
            color="#84e4ff"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          
        </div>
      ) : (
        <div className="bg-slate-900">
          <Nav />
          <Banner />
          <About />
          <Services />
          <Projects />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App
