import React from "react";
import { motion } from "framer-motion";
import { Registros } from "./TableActividades/TableActividades";
// import { Navbar } from "./NavBar/Navbar";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Registros />
    </motion.div>
  );
};
