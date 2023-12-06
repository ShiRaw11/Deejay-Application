import DeejayInput from "../components/common/input";
import NavLink from "../components/common/NavLink";
import React, { useState } from "react";
import logo from "..//images/logo.png";



function Login() {

  return (
    <div className="bg-background  w-[100vw] sm:flex-none flex h-[100vh]">
      <div className=" xl:w-[50%] sm:w-[0px] xl:my-auto xl:h-full xl:bg-trial sm:invisible xl:visible md:visible ">
        <img className="ml-[20px] mt-[40px] sm:invisible xl:visible md:visible" src={logo} alt="logo"></img>
        <div className="flex justify-center items-center sm:invisible xl:visible md:visible mt-[150px] ml-[20px]">
          <h className="xl:text-[25px] w-[60%] xl:font-bold text-white  sm:text-10px] sm:font-normal">
            K-Movers lets you Find your moving company with ease!
          </h>
        </div>
      </div>
      <div className="bg-white  xl:w-[800px] xl:my-auto h-full xl:items-center sm:w-[800px] shadow-lg ">
        <p className="flex mt-[20px] xl:text-[20px] justify-end xl:w-[600px] sm:w-[450px] sm:text-[15px] items-center">
          {" "}
          Dont have an account?
          <NavLink linkTitle={"sign up"} to={"/home"} />
        </p>
        <h className=" xl:w-[90%] sm:w-[60%] xl:flex xl:justify-start xl:pl-[20px] items-centermt-[50px] sm:pl-[40px] mx-auto xl:text-[25px] sm:text-[16px]">
          login to your account
        </h>
        <div className=" flex flex-col xl:ml-[60px] sm:ml-[45px] xl:w-[60%] sm:w-[60%] xl:justify-start  mt-[20px]">
          <div className={"flex border border-gray  w-[300px] "}>
            <div className="h-[40px] w-[40px]">
              <img
                className="h-full w-full object-cover "
                src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg"
                alt="google"
              ></img>
            </div>
            <div className="flex justify-center items-center  xl:ml-[20px] ">
              <NavLink
                linkTitle={"login with Google"}
                linkStyle={"text-black text-[16px]"}
              />
            </div>
          </div>
        </div>

        <div className=" xl:w-[90%] xl:h-[90%] sm:w-[90%] sm:h-[90%] mx-auto ">
          <form
            className="items-center mt-[30px] ml-[100px] sm:ml-[20px] "
        
          >
           

            <DeejayInput
              label={"Email"}
            
            />

            <DeejayInput
              label={"Password"}
              inputType={"password"}
           
            />
            <NavLink
              linkTitle={"Forgot password ?"}
              linkStyle={" flex justify-end w-[400px]"}
            />
            <div className="flex  justify-start w-[80%]">
              <div className="flex justify-start w-[50%]">
                <button
                  className="w-[250px] h-[50px] border rounded-lg bg-blue-button text-white duration-400 ease-in-out flex items-center justify-center "
                  type="submit"
                >
                  {" "}
                  login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
