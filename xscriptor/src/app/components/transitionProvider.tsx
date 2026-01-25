"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = () => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="relative w-full">
        <motion.div
          className="pointer-events-none fixed inset-x-0 top-0 bg-black rounded-b-[100px] z-[100]"
          style={{ height: "100vh" }}
          initial={{ height: "100vh" }}
          animate={{ height: 0 }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="pointer-events-none fixed inset-0 m-auto text-white text-5xl md:text-8xl cursor-default z-[110] w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="pointer-events-none fixed inset-x-0 bottom-0 bg-black rounded-t-[100px] z-[100]"
          style={{ height: "100vh" }}
          initial={{ height: "100vh" }}
          animate={{ height: 0 }}
          exit={{ height: "100vh" }}
          transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        />

        <Navbar />

      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
