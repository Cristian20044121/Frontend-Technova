import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
//icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

export const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className=" md:w-1/5"
    >
      <div className="bg-primary flex-col h-screen text-white md:p-2 md:w-full">
        <header className="md:p-1 md:flex-col md:justify-between md:items-center md:h-20">
          <img
            src="/logo-technova.png"
            alt="logo of page "
            className="md:w-1/2 sm:w-1/2 "
          />
          <div className=" flex md:flex-col  md:mt-20   flex-wrap gap-5 ">
            <div className="md:flex items-center md:gap-3">
              <img
                src="/image-user-profile.png"
                alt="image of profile"
                className="rounded-full h-10 w-10"
              />
              <h2 className="md:text-sm font-semibold">Valentina</h2>
            </div>
            <div className="border-t-2 border-white flex flex-col md:pt-3">
              <Link
                to="/"
                className="flex items-end md:p-2 md:mt-3 md:gap-3 hover:bg-gray  hover:text-black hover:border-l-4 hover:border-l-sky-600 transition-all ease-in-out duration-300 md:text-sm"
              >
                <HomeOutlinedIcon /> Home
              </Link>
              <Link
                to="/"
                className="flex items-end md:p-2 md:mt-5 md:gap-3 hover:bg-gray  hover:text-black hover:border-l-4 hover:border-l-sky-600 transition-all ease-in-out duration-300 md:text-sm"
              >
                <AssessmentOutlinedIcon className="" /> Services
              </Link>
              <Link
                to="/"
                className="flex items-end md:p-2 md:mt-5 md:gap-3 hover:bg-gray  hover:text-black hover:border-l-4 hover:border-l-sky-600 transition-all ease-in-out duration-300 md:text-sm"
              >
                <LoginOutlinedIcon /> Sign Out
              </Link>
            </div>
          </div>
        </header>
      </div>
    </motion.div>
  );
};
