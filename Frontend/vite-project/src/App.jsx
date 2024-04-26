// import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import {Routes,Route} from "react-router-dom";

function App() {

  return (
  <>
    {/* <Home></Home>
    <Course></Course> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contact" element={<Contacts/>} />

    </Routes>
  </>
    
  )
}

export default App
