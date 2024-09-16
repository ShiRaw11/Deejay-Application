
import { NavLink } from "react-router-dom";

import { NavBar } from "../components/common/navBar";

import { FaChevronDown} from "react-icons/fa";
import DeejayButton from "../components/common/button";
import React, { useState, useEffect  } from 'react';
import yt from "..//images/yt.png";
import twt from "..//images/twt.png";
import ig from "..//images/ig.jpeg";
import fb from "..//images/fb.png";

import MusicCard from "../components/common/musicCard";
import VideoCard from "../components/common/videoCard";
import DeejayInput from "../components/common/input";
import FloatingButton from "../components/common/floatingButton";
import Bubble from "../components/cuteBubbles";
import SpeakerIcon from "../components/common/speakerAnimation";
import eventsData from '../events.json';
const generateBubbles = (count) => {
  const colors = ['#FF0000', '#FFFFFF', '#0000FF']; // Red, White, Blue
  return Array.from({ length: count }).map((_, index) => {
    const size = `${Math.random() * 50 + 20}px`; // Random size between 20px and 70px
    const left = `${Math.random() * 100}%`; // Random horizontal position
    const animationDelay = `${Math.random() * 10}s`; // Random animation delay
    const color = colors[Math.floor(Math.random() * colors.length)]; // Random color
    return <Bubble key={index} size={size} left={left} animationDelay={animationDelay} color={color} />;
  });
};

export const Welcome = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-black to-blue-grey">
      <div className="flex">
      <img
        alt="image of DJ Jojez"
        src="https://cdn.pixabay.com/photo/2024/02/09/05/22/ai-generated-8562316_640.png"
        className="h-[30%] w-[40%] rounded-[40%]"
      ></img>
       <h className='text-white h-full font-bold mt-[20%] ml-[30px]'>"Music can change the world because it can change people." - Bono</h>
      </div>
     
     
    </div>
  );
};

export const Music = () => {
  return (
    <div className="w-[90%]  mx-auto ">
      <div className="relative z-10 p-2 text-black flex justify-between shadow-lg ">
<SpeakerIcon animationClass = 'absolute animate-moveLeft'/>
<h2 className="text-4xl font-bold mb-4 underline decoration-solid decoration-blue font-mono">
Music
        </h2>
        <SpeakerIcon  animationClass = 'absolute animate-moveRight'/>
</div>
  <div className="flex justify-between">
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
<div className="mt-[3%] flex text-[20px] justify-center hover:text-blue mx-auto w-[90%]">
<a className="mt-[5%] flex text-[20px] mb-[20px] justify-center hover:text-blue mx-auto w-[90%]font-mono flex justify-center items-center ">view more Music<FaChevronDown className="ml-1" /></a>
</div>
    </div>
  );
};

export const Videos = () => {
  return (
    <div className="w-[98%] mx-auto ">
     
<div className="relative z-10 p-2 text-black flex justify-between shadow-lg ">
<SpeakerIcon animationClass = 'absolute animate-moveLeft'/>
<h2 className="text-4xl font-bold mb-4 underline decoration-solid decoration-blue font-mono">
Video
        </h2>
        <SpeakerIcon animationClass = 'absolute animate-moveRight'/>
</div>
     
      <div className="">
      <VideoCard/>
      <a className="mt-[5%] flex text-[20px] justify-center hover:text-blue mx-auto w-[90%] flex justify-center items-center ">View more Videos<FaChevronDown className="ml-1" /></a>
      </div>
     
    </div>
  );
};



export const Events = () => {
  const [latestEvent, setLatestEvent] = useState(null);
  const today = new Date();

  useEffect(() => {
      // Filter and sort the events to find the latest event
      const upcomingEvents = eventsData.filter(event => new Date(event.date) >= today);
      const sortedEvents = upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

      // Set the latest upcoming event
      setLatestEvent(sortedEvents[0]);
  }, []);

  return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
          <h1 className="text-3xl font-bold mb-6">Latest Event</h1>
          {latestEvent ? (
              <div className="flex flex-col items-center bg-white shadow rounded-lg overflow-hidden max-w-md">
                  <img
                      src={latestEvent.image}
                      alt={latestEvent.title}
                      className="w-full  object-cover"
                      onError={(e) => {
                          console.error(`Image failed to load: ${latestEvent.image}`);
                          e.currentTarget.src = '/events/placeholder.png'; // Path to a placeholder image
                      }}
                  />
                  <div className="p-4 text-center">
                      <h3 className="text-lg font-bold">{latestEvent.title}</h3>
                      <p className="text-sm text-gray-500">Date: {new Date(latestEvent.date).toLocaleDateString()}</p>
                  </div>
              </div>
          ) : (
              <p className="text-lg text-gray-600">No upcoming events.</p>
          )}
          <a className="mt-[20px] flex text-[20px] justify-center hover:text-blue mx-auto w-[90%] flex justify-center items-center ">View more Events<FaChevronDown className="ml-1" /></a>
      </div>
  );

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
      <div className="bg-black bg-cover bg-no-repeat h-[100vh] mt-[20px] ">
      {generateBubbles(30)}
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
    <FloatingButton/>
    </>
  );
};

export default LandingPage;
