"use client";
import React from "react";
import CustomLink from "./CustomLink";
import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdAbc } from "react-icons/md";

const Sidebar = () => {
  const menuLinks = [
    {
      title: "Dashboard",
      path: "user/dashboard",
      icon: <HiOutlineHome />,
    },
    {
      title: "Characters",
      path: "user/characters",
      icon: <MdAbc />,
    },
    {
      title: "Leaderboard",
      path: "user/leaderboard",
      icon: <MdOutlineLeaderboard />,
    },
    {
      title: "Profile",
      path: "user/profile",
      icon: <HiOutlineUserCircle />,
    },
    {
      title: "Settings",
      path: "user/settings",
      icon: <HiOutlineUserCircle />,
    },

  ];

  return (
    <div className="hidden sm:flex flex-col fixed z-30 w-full h-full min-h-full max-w-[88px] xl:max-w-[300px] p-6 px-4 bg-lime-50 dark:bg-slate-800 border-r-2 border-gray-300 dark:border-gray-700 ">
      {menuLinks?.map((link) => (
        <CustomLink title={link.title} path={link.path} icon={link.icon} />
      ))}
    </div>
  );
};

export default Sidebar;
