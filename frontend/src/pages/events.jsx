import DeejayButton from "../components/common/button";
import EventCard from "../components/common/event";
import { NavBar } from "../components/common/navBar";
import { Link, NavLink } from "react-router-dom";
function EventsPage(){
    return(
        <div className=" ">
           <NavBar/> 
           <div className="w-[70%] shadow-md  mx-auto" >
           
           <div className="flex mt-[30px]  justify-around">
            <Link
              to="/"
              className="  text-[20px] h-[30px] text-black hover:font-bold hover:text-black hover:font-bold hover:underline decoration-blue decoration-4 underline-offset-[4px] focus:outline-none focus:font-bold focus:text-black focus:underline"
             
            >
              {" "}
              Past Sessions
            </Link>
            <Link
              to="/"
              className=" ml-[80px] text-[20px] h-[30px] text-black hover:font-bold hover:text-black hover:font-bold hover:underline decoration-blue decoration-4 underline-offset-[4px] focus:outline-none focus:font-bold focus:text-black focus:underline"
            
            >
              Upcoming Sessions
            </Link>
            </div>
            <hr className="text-black    mt-[2px]" />
          

           </div>

           <div className="flex flex-wrap">
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
           </div>
        </div>
    )
}

export default EventsPage;