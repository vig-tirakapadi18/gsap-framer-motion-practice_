"use client";

import {
    motion,
    useAnimation,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export const TextScrollView = () => {
  const textAnimationContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: textAnimationContainerRef,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(textAnimationContainerRef, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["100%", "0%"]
  );

  return (
    <div
      className="min-h-screen mx-[20%] my-20"
      ref={textAnimationContainerRef}
    >
      <motion.h1
        className="text-5xl font-bold mb-8 uppercase text-center"
        animate={mainControls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.3 }}
      >
        Title of Practice Tutorial
      </motion.h1>

      <div>
        <motion.p
          className="text-lg font-semibold"
          style={{ translateX: paragraphOneValue }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
          sapiente odit nobis quia magnam a facere iste. Iure nemo molestias
          architecto odio odit atque natus.
        </motion.p>

        <motion.p
          className="text-lg font-semibold"
          style={{ translateX: paragraphTwoValue }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          consequatur nobis delectus architecto velit, nihil asperiores natus
          harum voluptatem laudantium itaque neque eius optio atque.
        </motion.p>
      </div>
    </div>
  );
};
