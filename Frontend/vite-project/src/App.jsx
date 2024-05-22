// import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import {Routes,Route,Navigate} from "react-router-dom";
import { useAuth } from "./context/AuthProvider";


function App() {
  
  const [authUser] = useAuth()
  console.log(authUser);
  return (
  <>
    {/* <Home></Home>
    <Course></Course> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={authUser ? <Courses/> : <Navigate to="/signup"/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contact" element={<Contacts/>} />

    </Routes>
  </>
    
  )
}

export default App
