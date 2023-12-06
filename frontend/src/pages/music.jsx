import DeejayButton from "../components/common/button"
import MusicCard from "../components/common/musicCard"
import { NavBar } from "../components/common/navBar"
import Search from "../components/common/search"

function Music(){
    return(
        <div className="flex flex-col bg-white ">

          <NavBar/>
          
     

      <div>
        <div className="mt-4 flex">
        <Search/>
        </div>

<div className="w-[100vw]">


        <div className=" flex flex-wrap  w-[98%]  justify-around mt-4">
          <MusicCard/>
          <MusicCard/>
          <MusicCard/>
          <MusicCard/>
          <MusicCard/>
          <MusicCard/>
        </div>
    
        </div>

            
      </div>
      </div>
    )
}

export default Music