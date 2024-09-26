import { Avatar } from "@chakra-ui/react";
import { GoHome, GoHomeFill } from "react-icons/go";
import { MdExplore, MdOutlineExplore, MdOutlinePoll, MdOutlineQuiz, MdPoll, MdQuiz } from "react-icons/md";
import { PiQuotesDuotone, PiQuotesFill } from "react-icons/pi";

export const sidebarLinks = [
  {
    route: "/",
    label: "Home",
    activeIcon: <GoHomeFill style={{ fontSize: '24px' }}  />,
    inactiveIcon: <GoHome style={{ fontSize: '24px' }} />
  },
  {
    route: "/explore",
    label: "Explore",
    activeIcon: <MdExplore style={{ fontSize: '24px' }}  />,
    inactiveIcon: <MdOutlineExplore style={{ fontSize: '24px' }} />
  },
  {
    route: "/polls",
    label: "Polls",
    activeIcon: <MdPoll style={{ fontSize: '24px' }}  />,
    inactiveIcon: <MdOutlinePoll style={{ fontSize: '24px' }} />
  },
  {
    route: "/quizzes",
    label: "Quizzes",
    activeIcon: <MdQuiz style={{ fontSize: '24px' }}  />,
    inactiveIcon: <MdOutlineQuiz style={{ fontSize: '24px' }} />
  },
  {
    route: "/quotes",
    label: "Quotes",
    activeIcon: <PiQuotesFill style={{ fontSize: '24px' }}  />,
    inactiveIcon: <PiQuotesDuotone style={{ fontSize: '24px' }} />
  },
  {
    route: "/profile",
    label: "Profile",
    activeIcon: <Avatar size="xs" name="Giurgia David" />,
    inactiveIcon: <Avatar size="xs" name="Giurgia David" />,
  }
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
