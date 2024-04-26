import { useEffect , useState } from "react";
import Login from "./Login";

function Navbar() {
  const[sticky, setSticky]=useState(false);
  useEffect(()=> {
    const handleScroll =() => {
      if(window.scrollY > 0){
        setSticky(true);
      }
      else{
        setSticky(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);
    const navItems = (
        <>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/course">Course</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </>
  );
  return (
    <>
      <div className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 bg-white mb-2.5 ${sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out":""} `}>
        <div className="navbar py-2.5 flex flex-row w-full ">
          <div className="navbar-start w-1/5">
            <div className="dropdown hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a className=" text-2xl font-bold cursor-pointer">booksIdea</a>
          </div>
          <div className="navbar-end space-x-3 w-4/5 flex flex-row">
            <div className="navbar-center hidden lg:flex w-3/5">
              <ul className="menu menu-horizontal px-1 w-full flex justify-evenly ">{navItems}</ul>
            </div>
            <div className="hidden md:block flex flex-row w-1/5">
              <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
                <input
                  type="text"
                  className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              
            </div>
            <div className="w-1/5 text-center">
                <button href=""className="btn rounded-lg p-2 px-4 border border-black bg-slate-500 text-white" onClick={()=> document.getElementById("my_modal_3").showModal()
              }>Login</button>
              <Login/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
