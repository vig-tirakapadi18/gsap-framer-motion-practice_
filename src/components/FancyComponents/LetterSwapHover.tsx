"use client";

import { motion, Variants } from "framer-motion";

type Direction = "left" | "center" | "right";

interface LetterSwapHoverProps {
  text: string;
  className?: string;
  stagger?: number;
  direction?: Direction;
}

const letterVariants: Variants = {
  rest: { y: 0, opacity: 1 },
  hover: { y: "-100%", opacity: 0 },
};

const hoverLetterVariants: Variants = {
  rest: { y: 0, opacity: 0 },
  hover: { y: "-100%", opacity: 1 },
};

export const LetterSwapHover: React.FC<LetterSwapHoverProps> = ({
  text,
  className = "",
  stagger = 0.03,
  direction = "left",
}) => {
  const letters = Array.from(text);
  const total = letters.length;
  const center = (total - 1) / 2;

  const getDelay = (index: number) => {
    switch (direction) {
      case "right":
        return (total - 1 - index) * stagger;
      case "center":
        return Math.abs(index - center) * stagger;
      case "left":
      default:
        return index * stagger;
    }
  };

  return (
    <motion.div
      className={`inline-flex cursor-pointer ${className}`}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {letters.map((letter, index) => (
        <span key={index} className="relative inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={letterVariants}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: getDelay(index),
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>

          <motion.span
            className="absolute left-0 top-full inline-block"
            variants={hoverLetterVariants}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: getDelay(index),
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};

