import { FaHome, FaCompass, FaPoll, FaPlus, FaHeart } from "react-icons/fa";
import { Avatar } from "@chakra-ui/react";

export const sidebarLinks = [
  {
    route: "/",
    label: "Home",
    icon: <FaHome style={{ fontSize: '20px' }}  />,
  },
  {
    route: "/explore",
    label: "Explore",
    icon: <FaCompass style={{ fontSize: '20px' }}  />,
  },
  {
    route: "/short-polls",
    label: "Shorts",
    icon: <FaPoll style={{ fontSize: '20px' }}  />,
  },
  {
    route: "/notifications",
    label: "Notifications",
    icon: <FaHeart style={{ fontSize: '20px' }} />,
  },
  {
    route: "/create",
    label: "Create",
    icon: <FaPlus style={{ fontSize: '20px' }}  />,
  },
  {
    route: "/user-profile",
    label: "Profile",
    icon: <Avatar size="xs" name="Giurgia David" />,
  },
];



export const bottombarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/wallpaper.svg",
    route: "/explore",
    label: "Explore",
  },
  {
    imgURL: "/assets/icons/bookmark.svg", 
    route: "/saved",
    label: "Saved",
  },
  {
    imgURL: "/assets/icons/gallery-add.svg",
    route: "/create-post",
    label: "Create",
  },
];
