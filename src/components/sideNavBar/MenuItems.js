import {
  FiBell,
  FiSearch,
  FiHome,
  FiSmile,
  FiTrendingUp,
  FiArrowLeft,
} from "react-icons/fi";
import { FaGraduationCap } from 'react-icons/fa'
import {
  IoIosSettings,
  IoIosNotifications,
  IoAr,
} from "react-icons/io";
import { HiHome } from "react-icons/hi";
const MenuItems = [
  {
    title: "Notifications",
    url: "/notifications",
    cName: "navLink",
    icon: <IoIosNotifications size="25" />,
  },
  {
    title: "Search",
    url: "/search",
    cName: "navLink",
    icon: <FiSearch size="25" />,
  },
  {
    title: "Home",
    url: "/",
    cName: "navLink",
    icon: <HiHome size="25" />,
  },
  {
    title: "Report Card",
    url: "/account",
    cName: "navLink",
    icon: <FaGraduationCap size="25" />,
  },
  // {
  //   title: "Rank",
  //   url: "/rank-list",
  //   cName: "navLink",
  //   icon: <FiTrendingUp size="25" />,
  // },

  {
    title: "Account Settings",
    url: "/settings",
    cName: "navLink",
    icon: <IoIosSettings size="25" />,
  },
  {
    title: "Go Back",
    url: "",
    cName: "goback",
    icon: <FiArrowLeft size="25" />,
  },
];

export default MenuItems;
