import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import yt from "../../images/yt.png";
import twt from "../../images/twt.png";
import ig from "../../images/ig.jpeg";
import fb from "../../images/fb.png";

export const NavTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-2 p-1 px-2 hover:bg-white hover:rounded-md hover:text-blue hover:font-bold outline-offset-2 outline-blue hover:outline-none">
      {title}
    </div>
  );
};
  
  export const NavBar = ({ navStyle, primaryNavStyle }) => {
    const activeItemStyle =
      "flex items-center border-transparent border-solid border-[3px] border-b-blue h-[3.8em] text-blue outline-offset-2 outline-blue hover:outline-none";
    const navItemStyle =
      "flex items-center outline-offset-2 outline-blue hover:outline-none";
  
    return (
      <>
        <div
          className={`flex items-center justify-around border w-[100vw] h-95px shadow-lg bg-black ${
            navStyle ? navStyle : ""
          }`}
        >
          <div className="w-[70px] border">
            <img
              className="flex justify-center items-center mt-5"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="text-white">
            <ul
              className={`flex justify-between items-center gap-6 font-medium ${
                primaryNavStyle ? primaryNavStyle : ""
              }`}
            >
              <li>
                <NavLink
                  to="/music"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <NavTitle title="Music Mix" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/video"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <NavTitle title="Video Mix" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <NavTitle title="Events" /> 
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/biography"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                   <NavTitle title="Biography" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/photos"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                   <NavTitle title="Photo dummp" />
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <ul
              className={`flex text-white justify-between items-center gap-6 font-medium ${
                primaryNavStyle ? primaryNavStyle : ""
              }`}
            >
              <li>
                <NavLink
                  to="/fb"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={fb}
                      alt="Facebook"
                    ></img>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fb"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={yt}
                      alt="YouTube"
                    ></img>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fb"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={twt}
                      alt="Twitter"
                    ></img>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fb"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={ig}
                      alt="Instagram"
                    ></img>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fb"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={"https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg"}
                      alt="Google Play"
                    ></img>
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fb"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={"https://apttutorials.com/wp-content/uploads/2022/09/spotify-g65c3dbec4_1280.jpg"}
                      alt="Spotify"
                    ></img>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };