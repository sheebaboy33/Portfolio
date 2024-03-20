"use client";

import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          Sharm Fernando
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/sharm-fernando-11755125b/">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://twitter.com/SharmFernando33">
            <img src="/twitter.jpg" alt="" />
          </a>
          <a href="https://github.com/sheebaboy33">
            <img  src="/github.png" alt="" />
          </a>
          <a href="https://medium.com/@sharmfernando33">
            <img src="/medium.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
