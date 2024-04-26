import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Contacts() {
  return (
    <>
        <Navbar/>
        <div className="min-h-screen">
            <Contact/>

        </div>
        <Footer/>
    </>  )
}

export default Contacts