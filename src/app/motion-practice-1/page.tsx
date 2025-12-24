"use client";

import { motion, useScroll, Variants } from "framer-motion";
import { TextScrollView } from "./TextScrollView";

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: -400 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const svgIconVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgb(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgb(255, 255, 255, 1)",
  },
};

const MotionPracticeOne = () => {
  const { scrollYProgress: completeProgress } = useScroll();

  return (
    <>
      <motion.main
        className="min-h-screen bg-stone-950 grid grid-cols-4 gap-4 p-4 *:h-[400px]"
        variants={parentVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="bg-stone-800 flex h-full w-full items-center justify-center gap-4"
          variants={childVariants}
        >
          <motion.div
            className="bg-rose-500 w-20 h-20 rounded-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 2.5 }}
          />
          <motion.div
            className="bg-sky-500 w-20 h-20 rounded-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
          />
        </motion.div>

        <motion.div
          className="bg-stone-800 flex h-full w-full items-center justify-center gap-4"
          variants={childVariants}
        >
          <motion.div
            className="w-16 h-16 bg-green-600"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%", "40%"],
              opacity: [1, 0.5, 0.75, 0.5, 1],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />
        </motion.div>

        <motion.div
          className="bg-stone-800 flex w-full h-full justify-center items-center"
          variants={childVariants}
        >
          <motion.button
            className="h-fit px-2 py-1 rounded-lg text-white"
            initial={{ scale: 1, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#bb4d00",
              color: "#fff",
            }}
            transition={{ bounceDamping: 10, bounceStiffness: 500 }}
          >
            Cool Button
          </motion.button>
        </motion.div>

        <motion.div
          className="bg-stone-800 flex justify-center items-center w-full h-full"
          variants={childVariants}
        >
          <motion.div
            className="w-16 h-16 bg-purple-500 rounded-lg cursor-grab"
            drag
            dragConstraints={{
              left: -125,
              right: 125,
              top: -125,
              bottom: 125,
            }}
            dragTransition={{
              bounceDamping: 10,
              bounceStiffness: 1000,
            }}
          />
        </motion.div>

        <motion.div
          className="bg-stone-800 flex justify-center items-center w-full h-full"
          variants={childVariants}
        >
          <motion.div className="w-10 h-28 bg-violet-600/20 rounded-xl">
            <motion.div
              className="w-full bg-violet-600 rounded-xl h-full"
              style={{ scaleY: completeProgress }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-stone-800 flex justify-center items-center"
          variants={childVariants}
        >
          <motion.svg
            width="80px"
            height="80px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            variants={svgIconVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: {
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              },
              fill: {
                duration: 2,
                ease: "easeInOut",
                delay: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.5,
              },
            }}
          >
            <motion.path
              d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z"
              fill="#050D42"
              variants={svgIconVariants}
            />
            <motion.path
              d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z"
              fill="#050D42"
              variants={svgIconVariants}
            />
            <motion.path
              d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z"
              fill="#050D42"
              variants={svgIconVariants}
            />
            <motion.path
              d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z"
              fill="#2F4BFF"
              variants={svgIconVariants}
            />
          </motion.svg>
        </motion.div>

        <motion.div className="bg-stone-800" variants={childVariants} />
        <motion.div className="bg-stone-800" variants={childVariants} />
        <motion.div className="bg-stone-800" variants={childVariants} />
        <motion.div className="bg-stone-800" variants={childVariants} />
        <motion.div className="bg-stone-800" variants={childVariants} />
        <motion.div className="bg-stone-800" variants={childVariants} />
      </motion.main>

      <div className="mx-40">
        <TextScrollView />
      </div>
    </>
  );
};

export default MotionPracticeOne;
