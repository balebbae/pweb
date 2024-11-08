"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  icon: React.ReactNode;
}

const NavLinks = ({ title, icon }: Props) => {
  return (
    <motion.div
      className="flex items-center gap-x-2 hover:cursor-pointer"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      whileTap={{ scale: 0.9 }}
    >
      {icon}
      <span className="font-serif">{title}</span>
    </motion.div>
  );
};

export default NavLinks;
