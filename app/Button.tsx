"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  text: string;
  color: "green" | "red";
  scale?: number;
  className?: string;
  onClick: () => void;
}

const Button = ({
  text,
  color,
  scale = 1.0,
  onClick,
  className = "",
}: Props) => {
  return (
    <motion.button
      className={`${className} p-2 px-4 rounded-xl flex items-center justify-center transform border border-black text-white h-fit w-fit`}
      animate={{ scale: scale, margin: scale * 20 }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
