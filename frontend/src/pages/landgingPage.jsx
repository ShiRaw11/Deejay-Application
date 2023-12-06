
import { NavLink } from "react-router-dom";

import { NavBar } from "../components/common/navBar";

import { FaChevronDown} from "react-icons/fa";
import DeejayButton from "../components/common/button";

import yt from "..//images/yt.png";
import twt from "..//images/twt.png";
import ig from "..//images/ig.jpeg";
import fb from "..//images/fb.png";

import MusicCard from "../components/common/musicCard";
import VideoCard from "../components/common/videoCard";
import EventCard from "../components/common/event";
import DeejayInput from "../components/common/input";


export const Welcome = () => {
  return (
    <div className="h-20px w-[90%] border mx-auto mt-10">
      <img
        alt="face.js
        "
        className="h-full w-full  "
      ></img>
    </div>
  );
};

export const Music = () => {
  return (
    <div className="w-[90%] h-[100vh] mx-auto ">
      <div className="flex justify-center w-[100%] font-bold text-[50px]">
        <h className=""> Music</h>
      </div>

      <div className="flex mt-4 justify-between">
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
<div className="mt-[3%] flex text-[20px] justify-center hover:text-blue mx-auto w-[90%]">
<a className="mt-[5%] flex text-[20px] justify-center hover:text-blue mx-auto w-[90%]  flex justify-center items-center ">view more<FaChevronDown className="ml-1" /></a>
</div>
    </div>
  );
};

export const Videos = () => {
  return (
    <div className="w-[98%] h-[100vh] mx-auto ">
     
        <h className="flex justify-center w-[100%] font-bold text-[50px]"> Videos</h>
     
      <div className="">
      <VideoCard/>
      <a className="mt-[5%] flex text-[20px] justify-center hover:text-blue mx-auto w-[90%] flex justify-center items-center ">view more<FaChevronDown className="ml-1" /></a>
      </div>
     
    </div>
  );
};

export const Events=()=>{
  return(

  
  <div className="w-[100%] h-[100vh] mx-auto mt-[40px] bg-gray ">
      <h className="flex justify-center w-[100%] font-bold text-[50px]"> Events</h>
      <div className=" bg-gray h-[500px] w-[100%] rounded-lg gap-2 flex justify-center">
      <EventCard/>
        </div>

  </div>
  )
};
export const MailList=()=>{
  return(
    <div className="flex flex-col items-center justify-center">
       <h2 className="font-medium text-[27px]  pt-[5%] flex justify-center ">Join Our Mail List</h2>
      <p className="font-small text-[20px] text-blue mt-5 w-[90%] flex justify-center"> Be the first one to know of upcoming events! and new music releases</p>
      <DeejayInput inputStyle={'mt-5 h-[50px]'}  placeholder={'Enter your email'}/>
      <DeejayButton buttonText={"Join"}  buttonStyle={"h-[3.5rem] mt-5"} />
    </div>
  )
}
export const Footer=()=>{
return(
  <div className="w-[100%] h-[80vh] mx-auto  flex justify-between bg-backg bg-cover bg-no-repeat pl-[5%] ">
<div>
<h2 className="font-medium text-[27px] text-white pt-[10%] ">Lets Connect!</h2>

<div className="mt-[20px]">
          <ul
            className={`flex text-white justify-between items-center font-medium 
            
            `}
          >
            <li>
              <NavLink
                to="/fb"
                
                onClick={(e) => e.preventDefault()}
              >
                <div className="h-[20px] w-[20px]">
                  <img
                    className="h-[100%] w-[100%] object-cover"
                    src={fb}
                  ></img>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fb"
                
                onClick={(e) => e.preventDefault()}
              >
                <div className="h-[20px] w-[20px]">
                  <img
                    className="h-[100%] w-[100%] object-cover"
                    src={yt}
                  ></img>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fb"
               
                onClick={(e) => e.preventDefault()}
              >
                <div className="h-[20px] w-[20px]">
                  <img
                    className="h-[100%] w-[100%] object-cover"
                    src={twt}
                  ></img>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fb"
                
                onClick={(e) => e.preventDefault()}
              >
                <div className="h-[20px] w-[20px]">
                  <img
                    className="h-[100%] w-[100%] object-cover"
                    src={ig}
                  ></img>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <p className="font-small text-[20px] text-blue mt-10 "> Folow us on our social media platforms</p>
        <div className="font-small text-[20px] text-white mt-[60%] ">
        <h className=" "> All rights reserver @2023</h>
        </div>
 
      </div>
      <div className="text-white">
     <MailList/>
      </div>
    </div>

)
}
const LandingPage = () => {
  return (
    <>
      <div className="bg-backg bg-cover bg-no-repeat h-[100vh] mt-[20px] ">
        <NavBar />
        <Welcome />
      </div>
      <div className="mt-5">
        <Music />
      </div>

      <Videos />

      
      <div>
      <Events/>
      </div>
      <Footer/>
    
    </>
  );
};

export default LandingPage;
