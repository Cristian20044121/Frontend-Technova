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
      className=" md:w-full"
    >
      <div className="bg-primary flex flex-col md:flex-row text-white md:p-4 md:w-full">
        <header className="flex justify-between md:gap-10 items-center md:h-20 p-4 w-full">
          <img
            src="/logo-technova.png"
            alt="logo of page"
            className="sm:w-1/5 md:w-1/5 md:h-20"
          />

          <div className="flex items-center justify-between gap-6 md:gap-10">
            <div className="flex items-center gap-3">
              <img
                src="/image-user-profile.png"
                alt="image of profile"
                className="rounded-full h-8 w-8"
              />
              <h2 className="text-sm font-semibold">Valentina</h2>
            </div>

            <div className="flex flex-col md:flex-row md:pl-2 md:gap-10">
              <Link
                to="/"
                className="flex items-center gap-3 p-2 hover:bg-gray hover:text-black hover:border-l-2 hover:border-l-sky-600 transition-all ease-in-out duration-300 text-sm"
              >
                <HomeOutlinedIcon /> Home
              </Link>
              <Link
                to="/"
                className="flex items-center gap-3 p-2 hover:bg-gray hover:text-black hover:border-l-2 hover:border-l-sky-600 transition-all ease-in-out duration-300 text-sm"
              >
                <AssessmentOutlinedIcon /> Services
              </Link>
              <Link
                to="/"
                className="flex items-center gap-3 p-2 hover:bg-gray hover:text-black hover:border-l-2 hover:border-l-sky-600 transition-all ease-in-out duration-300 text-sm"
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
