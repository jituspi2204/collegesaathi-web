import React from "react";
import MenuItems from "./MenuItems";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { AiOutlineAndroid } from "react-icons/ai";
import { FiEdit, FiLogOut } from "react-icons/fi";

const SideNavBar = () => {
  return (
    <div className="backdrop-filter backdrop-blur fixed top-0 left-0 w-full md:w-32 md:h-screen">
      <div className="flex flex-row max-w-screen justify-between items-center md:flex-col md:h-full">
        <div className="group m-2 py-2 px-1 flex flex-col items-center rounded cursor-pointer w-12 sm:w-20">
          <NavLink exact to="/">
            <img src={Logo} width="40px" />
            <p className="opacity-0 transition duration-200  tracking-wider">
              Home
            </p>
          </NavLink>
        </div>
        <nav className=" flex justify-center flex-row md:flex-col md:h-full">
          {/* <nav className=""> */}
          {MenuItems.map((item, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={item.url}
                  exact={item.url === "/"}
                  activeClassName="text-yellow-500"
                >
                  <SideBarIcon title={item.title} icon={item.icon} />
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="flex flex-row md:flex-col mr-2">
          <a href="https://quiet-scrubland-22380.herokuapp.com/app/collegesaathiapp.apk">
            <div className="group flex flex-col items-center  cursor-pointer w-12 ">
              <div className=" bg-green-200 rounded-full p-2 ">
                <AiOutlineAndroid size="25" color="green" />
              </div>
              <p className=" text-green-500 opacity-0 transition duration-200 group-hover:opacity-100  tracking-wider">
                APK
              </p>
            </div>
          </a>
          <div className="group flex flex-col items-center cursor-pointer w-12 ">
            <div className="bg-red-200 rounded-full p-2 ">
              <FiLogOut size="25" color="red" />
            </div>
            <p className="text-red-500 opacity-0 transition duration-200 group-hover:opacity-100  tracking-wider">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SideBarIcon = ({ title, icon }) => {
  return (
    <div className="group  py-2 px-1 flex flex-col items-center rounded cursor-pointer w-12 sm:w-20">
      <div className=" group-hover:animate-bounce">{icon}</div>
      <p className="opacity-0 transition duration-200 group-hover:opacity-100 tracking-wider">
        {title}
      </p>
    </div>
  );
};

export default SideNavBar;
