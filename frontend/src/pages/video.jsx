import { NavBar } from "../components/common/navBar"
import Search from "../components/common/search"

import VideoCard from "../components/common/videoCard"

export const VideosPage=()=>{
return(
    <div className="bg-white">
      
       <NavBar/>
       <div className="bg-transparent">
       <Search/>
       </div>
     
       <div className="mt-4 w-[97%] mx-auto">
       <VideoCard videoUrl={"https://www.youtube.com/embed/fln_Y75n16s" } titles={"Vybz Kartel Mix 2021 Raw"}/> 
       </div>
     
    </div>
)
}

