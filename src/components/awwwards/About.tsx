"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800",
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0
        })
    }, [])

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zentry
        </h2>

        <AnimatedTitle />
        {/* <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          Disc<b>over</b> the world&apos;s l<b>a</b>rgest shared adventure
        </div> */}

        <div className="about-subtext">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="relative mask-clip-path about-image">
            <Image src="/awwwards/img/about.webp" alt="Background" className="absolute left-0 top-0 size-full object-cover" fill />
        </div>
      </div>
    </div>
  );
}

export default About
