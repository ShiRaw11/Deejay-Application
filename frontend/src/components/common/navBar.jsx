import { Menu, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaChevronDown,FaSpotify } from "react-icons/fa";

import logo from "../../images/logo.png";

import yt from "../../images/yt.png";
import twt from "../../images/twt.png";
import ig from "../../images/ig.jpeg";
import fb from "../../images/fb.png";
export const NavDropDown = ({ dropTitle, dropItems, children }) => {
    return (
      <Menu as="div" className="relative z-50 inline-block text-left">
        <div>
          <Menu.Button className="flex items-center gap-2 p-1 px-2 hover:bg-youngtal-gray-200 hover:rounded-md hover:text-youngtal-dark-blue outline-offset-2 outline-youngtal-dark-blue hover:outline-none ">
            {dropTitle}
            <FaChevronDown className="text-[.8rem]" />
          </Menu.Button>
        </div>
  
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`flex absolute -ml-2 mt-3 rounded-md bg-white shadow-youngtal-shadow w-auto ${
              children ? "w-auto" : ""
            }`}
          >
            {children ? (
              children
            ) : (
              <div className="flex flex-col w-full justify-center px-3 py-3 text-gray text-base font-[500]">
                {dropItems.map((item) => (
                  <Menu.Item key={Math.random()}>
                    <Link
                      to={item.path}
                      className="flex min-w-[13em] items-center gap-3 p-2 hover:text-blue text-black hover:bg-gray hover:p-2 hover:rounded-md outline-offset-2 outline-blue hover:outline-none whitespace-nowrap"
                    >
                      {item.text}
                    </Link>
                  </Menu.Item>
                ))}
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };
  
  export const NavBar = ({ navStyle, primaryNavStyle }) => {
    // const onHover = "flex items-center hover:text-youngtal-dark-blue outline-offset-2 outline-youngtal-dark-blue hover:outline-none";
    const videoMix = [
      { path: "/video", text: "hip hop" },
      { path: "/video", text: "Reggae" },
      { path: "/video", text: "Soul" },
      { path: "/video", text: "Rock" },
      { path: "/video", text: "Mugithi" },
    ];
    const musicMix = [
      { path: "/music", text: "hiphop" },
      { path: "/music", text: "Reggae" },
      { path: "/music", text: "Soul" },
      { path: "/music", text: "Rock" },
      { path: "/music", text: "Mugithi" },
    ];
  
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
          <div className=" w-[70px]  border">
            <img
              className="flex justify-center items-center mt-5"
              src={logo}
              alt="logo"
            />
          </div>
          <div className=" text-white">
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
                  onClick={(e) => e.preventDefault()}
                >
                  <NavDropDown dropTitle={"Music Mix"} dropItems={musicMix} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/video"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                  onClick={(e) => e.preventDefault()}
                >
                  <NavDropDown dropTitle={"Video Mix"} dropItems={videoMix} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="p-1 px-2 hover:bg-gray hover:rounded-md hover:text-blue">
                    Event
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/biography"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="p-1 px-2 hover:bg-gray hover:rounded-md hover:text-blue">
                    Biography
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mail"
                  className={({ isActive }) =>
                    isActive ? activeItemStyle : navItemStyle
                  }
                >
                  <span className="p-1 px-2 hover:bg-gray hover:rounded-md hover:text-blue">
                    Mail list
                  </span>
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
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={fb}
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
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={yt}
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
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={twt}
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
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={ig}
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
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={"https://play-lh.googleusercontent.com/QLQzL-MXtxKEDlbhrQCDw-REiDsA9glUH4m16syfar_KVLRXlzOhN7tmAceiPerv4Jg"}
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
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="h-[20px] w-[20px]">
                    <img
                      className="h-[100%] w-[100%] object-cover"
                      src={"https://apttutorials.com/wp-content/uploads/2022/09/spotify-g65c3dbec4_1280.jpg"}
                    ></img>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </>
    );}
