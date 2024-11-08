"use client";

import React from "react";
import { Button } from "./ui/button";
import { IconMail } from "@tabler/icons-react";
import { motion } from "framer-motion";

const ContactButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      whileTap={{ scale: 0.9 }}
    >
      <Button className="rounded-full px-8 py-5 mt-3 text-xl text-black font-serif bg-white border-2 border-black hover:bg-black hover:text-white">
        <IconMail /> Contact Me
      </Button>
    </motion.div>
  );
};

export default ContactButton;
