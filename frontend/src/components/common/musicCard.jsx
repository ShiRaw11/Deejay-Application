import DeejayButton from "./button"
import {FaDownload} from 'react-icons/fa'

import {FaSpotify} from 'react-icons/fa'
function MusicCard(){
    return(
        <div className=" bg-gradient-to-r from-blue to-transparent h-[320px] w-[320px] rounded-[10px] gap-4 mt-4">
           <iframe src="https://open.spotify.com/embed/track/5QnPskibmHymEa9Qp7q1eJ?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>


   
</div>

            
      
    )
}

export default MusicCard