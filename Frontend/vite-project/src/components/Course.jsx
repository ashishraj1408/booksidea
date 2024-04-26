import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import Freebook from "./Freebook";

function Course() {
    console.log(list);
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28 items-center justify-center text-center">
                <h1 className="text-2xl md:text-5xl py-2.5">We are delighted to have you {""}<span className="text-pink-500">Here! :)</span></h1>
                <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestiae nemo, laborum, blanditiis distinctio veritatis nostrum expedita quod mollitia, corrupti nihil sequi architecto similique amet ea. Ducimus at, accusamus reprehenderit quam quidem officia voluptatem consequatur dolorem ullam, enim exercitationem porro. Illo maxime obcaecati blanditiis assumenda dolorum possimus! Aliquid, ducimus incidunt!</p>
                <Link to="/">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
                </Link>
            </div>
            <div>
                <Freebook/>
                {
                    list.map((item) => {
                        <Cards key={item.id} item={item}/>
                    })
                }

            </div>
        </div>
    </>
  )
}

export default Course
