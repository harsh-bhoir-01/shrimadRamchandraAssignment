"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScheduleCard from "./ScheduleCard";

const Schedule = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      ref={targetRef}
      id="schedule"
      className="py-16 relative bg-white lg:px-20 -z-10 "
    >
      <h2 className="font-crimson py-1 text-[40px] text-[#631019] flex justify-center items-center font-semibold sticky top-20 md:top-24 bg-white z-10">
        Schedule
      </h2>
      <motion.div style={{ y: translateY }} className="relative">
        <ScheduleCard />
      </motion.div>
    </div>
  );
};

export default Schedule;
