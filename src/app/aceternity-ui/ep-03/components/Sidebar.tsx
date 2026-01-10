"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { links } from "../constants";

const sidebarVariants: Variants = {
  open: {
    width: "16rem",
  },
  close: {
    width: "4.5rem",
  },
};

const parentVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.7,
      delayChildren: 0.3,
    },
  },
  close: {
    transition: {
        staggerChildren: 0.5,
        delayChildren: -1
    }
  }
};

const childVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
  },
  close: {
    opacity: 0,
    y: -10,
  },
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "close"}
      exit="close"
      transition={{ duration: 0.3 }}
      className="border-r border-stone-100 h-full"
    >
      <motion.nav
        variants={sidebarVariants}
        // initial={false}
        // animate={isOpen ? "open" : "close"}
        // transition={{ duration: 0.3 }}
        className="bg-white shadow-md h-screen"
      >
        <div className="p-4 flex justify-between items-center">
          <h2
            className={twMerge("text-xl font-semibold", !isOpen && "sr-only")}
          >
            Dashboard
          </h2>

          <button
            onClick={toggleSidebar}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <div className="relative">
          <nav className="p-4">
            <ul className="space-y-2">
              {links.map((link) => (
                <motion.li variants={childVariants} key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200 gap-2"
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon} {isOpen && link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.nav>
    </motion.div>
  );
};
