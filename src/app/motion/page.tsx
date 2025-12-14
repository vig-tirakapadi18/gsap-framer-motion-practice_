"use client";
import { motion, Variants } from "framer-motion";

const parentVariants: Variants = {
  invisible: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const childVariants: Variants = {
  invisible: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

const FramerMotion = () => {
  return (
    <div className="p-10 bg-green-100 min-h-screen flex flex-col gap-5">
      <section>
        <motion.h1 animate={{ fontSize: "50px", fontWeight: "bolder" }}>
          Using Framer Motion
        </motion.h1>
        <motion.button
          animate={{ scale: 1.5, x: 100 }}
          className="bg-amber-500 px-8 py-1 rounded-full text-white font-semibold"
        >
          Animate Me
        </motion.button>
      </section>

      <section>
        <motion.div initial={{ y: -250 }} animate={{ y: 0 }}>
          I am coming from UP!!!
        </motion.div>

        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          I am appearing from invisibility!!!
        </motion.h2>

        <motion.button
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          className="bg-violet-600 text-white px-6 py-1 rounded-md"
          transition={{
            delay: 1,
            duration: 2.5,
            type: "spring",
            stiffness: 250,
          }}
        >
          Coming from Left
        </motion.button>
      </section>

      <section>
        <motion.button
          transition={{
            duration: 2.5,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.25,
            textShadow: "0px 0px 8px rgb(0, 0, 0)",
            boxShadow: "0px 0px 8px rgb(0, 0, 0)",
          }}
          className="bg-violet-600 text-white px-6 py-1 rounded-md"
        >
          Change styles when hover
        </motion.button>
      </section>

      <section>
        <motion.div
          variants={parentVariants}
          initial="invisible"
          animate="visible"
          className="flex flex-col gap-2"
        >
          <motion.div variants={childVariants}>
            <button className="bg-green-600 px-6 py-1 rounded text-white">
              Variants Button
            </button>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="bg-amber-400 h-10 w-10 rounded"
          />
          <motion.div
            variants={childVariants}
            className="bg-violet-400 h-10 w-10 rounded"
          />
          <motion.div
            variants={childVariants}
            className="bg-green-400 h-10 w-10 rounded"
          />
          <motion.div
            variants={childVariants}
            className="bg-stone-400 h-10 w-10 rounded"
          />
          <motion.div
            variants={childVariants}
            className="bg-pink-400 h-10 w-10 rounded"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default FramerMotion;
