"use client";

import {
  X
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const Card = () => {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      {open && (
        <motion.article
          initial={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className={twMerge(
            "w-72 min-h-110 h-100 rounded-xl bg-white",
            "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
            "p-6 flex flex-col font-sans"
          )}
        >
          <h2 className="font-bold text-[10px]">Card Hover Animations</h2>
          <p className="text-stone-400 mt-2 text-[10px]">
            A beautiful UI component, let&apos;s get on with this.
          </p>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setOpen(false)}
              className="flex items-center gap-1 text-[10px] mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1"
            >
              <Image
                width={50}
                height={50}
                className="h-4 w-4"
                alt="logo"
                src="https://img.icons8.com/?size=100&id=sI5Un8EDgMny&format=png&color=000000"
              />{" "}
              Jungle
              <X className="w-3 h-3 text-stone-400" />
            </button>
          </div>

          <div className="flex-1 mt-4 rounded-lg border border-dashed border-stone-300 bg-stone-100 relative">
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px" }}
              whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
              // transition={{ duration: 0.5, ease: "easeInOut" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-stone-200"
            >
              <div className="flex gap-2 p-4">
                <div className="w-7 h-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-stone-600" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-stone-600">
                    Inner Card Animations
                  </p>
                  <p className="text-stone-400 text-[8px] mt-1">
                    A collection of UI components
                  </p>
                </div>
              </div>

              <div className="flex gap-2 p-4">
                <div className="w-7 h-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <ChessKnight className="h-4 w-4 text-stone-600" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-stone-600">
                    Chess Knight looks good
                  </p>
                  <p className="text-stone-400 text-[8px] mt-1">
                    Super fast delivery at wrap speed
                  </p>
                </div>
              </div>

              <div className="flex gap-2 p-4">
                <div className="w-7 h-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <ScanEye className="h-4 w-4 text-stone-600" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-stone-600">
                    360 days all around
                  </p>
                  <p className="text-stone-400 text-[8px] mt-1">
                    We are here to help you 24/7.
                  </p>
                </div>
              </div>

              <div className="flex gap-2 p-4">
                <div className="w-7 h-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <Box className="h-4 w-4 text-stone-600" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-stone-600">
                    Some other components
                  </p>
                  <p className="text-stone-400 text-[8px] mt-1">
                    Here goes another boring subtitle
                  </p>
                </div>
              </div>

              <div className="flex gap-2 p-4 items-center justify-center">
                <div className="w-7 h-7 shrink-0 bg-linear-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                  <Plus className="h-4 w-4 text-stone-600 rounded-full" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[8px] font-bold text-stone-600">
                    Add more items
                  </p>
                </div>
              </div>
            </motion.div> */}

            <motion.div
              initial={{ opacity: 0, scale: 0.98, filter: "blur(10px" }}
              whileHover={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
              // transition={{ duration: 0.5, ease: "easeInOut" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-stone-200"
            >
              <Image
                src="https://cdn.pixabay.com/photo/2025/09/12/16/42/dog-9830812_1280.jpg"
                alt="Pretty Dogs"
                fill
                className="w-full h-full rounded-md"
              />
            </motion.div>
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  );
};
