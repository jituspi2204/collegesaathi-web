import React, { useContext } from "react";
import MenuItems from "./MenuItems";
import { NavLink ,useHistory} from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { AiOutlineAndroid, AiOutlineMenu } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { FiLogOut } from "react-icons/fi";
import firebase from "../../firebase_config";
import { UserContext } from "../../context/userContext";

const SideNavBar = () => {
  const user = useContext(UserContext)["user"];
  const history = useHistory()
  const signOutHandler = () => {
    localStorage.removeItem("token_collegesaathi");
    firebase.auth().signOut();
  };

  return (
    <div className="backdrop-filter fixed bottom-0 left-0 w-full md:w-32 md:h-screen h-12 md:p-1">
      {/* <div>
        <div className="group m-2 py-2 px-1 flex flex-col items-center rounded cursor-pointer w-12 sm:w-20">
          <NavLink exact to="/">
            <img src={Logo} width="40px" alt="logo" />
            <p className="opacity-0 transition duration-200  tracking-wider">
              Home
            </p>
          </NavLink>
        </div>
        <div className="flex flex-row md:flex-col mr-2">
          <a href="https://quiet-scrubland-22380.herokuapp.com/app/collegesaathiapp.apk">
            <div className="group flex flex-col items-center  cursor-pointer w-12 ">
              <div className=" bg-yellow-400 rounded-full p-2 ">
                <DiAndroid size="25" color="white" />
              </div>
              <p className=" text-white opacity-0 transition duration-200 group-hover:opacity-100 text-center tracking-wider">
                APK
              </p>
            </div>
          </a>
        </div>
      </div> */}
      <div className="flex flex-row max-w-screen justify-between items-center md:flex-col md:h-full bg-gray-800 md:mt-16">
        {user && user.email && (
          <nav className=" flex md:justify-center flex-row md:flex-col h-full w-full justify-between">
            {/* <nav className=""> */}
            {MenuItems.map((item, index) => {
              return item.cName === 'goback' ? (
                <div key={index}>
                  <button
                    onClick={() => history.goBack()}
                  >
                    <SideBarIcon title={item.title} icon={item.icon} />
                  </button>
                </div>
              ) : (
                <div key={index}>
                  <NavLink
                    to={item.url}
                    exact={item.url === "/" || item.url === "/my-files/:subject"}
                    activeClassName="text-yellow-500"
                  >
                    <SideBarIcon title={item.title} icon={item.icon} />
                  </NavLink>
                </div>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
};

const SideBarIcon = ({ title, icon }) => {
  return (
    <div className="group  py-2 px-1 flex flex-col items-center rounded cursor-pointer w-12 sm:w-20">
      <div className=" group-hover:animate-bounce">{icon}</div>
      <p className="opacity-0 transition duration-200 group-hover:opacity-100 tracking-wider text-xs text-center">
        {title}
      </p>
    </div>
  );
};

export default SideNavBar;
