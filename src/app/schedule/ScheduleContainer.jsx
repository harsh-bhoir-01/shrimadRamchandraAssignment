"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ScheduleContainer = ({ events, image }) => {
  return (
    <div className="p-5 md:p-0 mt-4 bg-[#631019] text-lg font-poppins rounded-3xl md:text-left md:grid grid-cols-2">
      <motion.div
        className="md:flex flex-col justify-center items-center md:pl-7 md:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        {events.map((E) => (
          <div key={E.time} className="leading-6 pb-4">
            <p className="text-[#E3B055]">{E.time}</p>
            <p className="text-white">{E.description}</p>
          </div>
        ))}
      </motion.div>
      <div className="md:flex justify-end md:p-0 md:-mt-12">
        <div className="mt-12 md:w-[289px] md:h-[289px] lg:w-[385px] lg:h-[385px] xl:w-[276px] xl:h-[276px]">
          <Image
            alt="schedule"
            src={image}
            className="rounded-3xl md:rounded-l-none w-full md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleContainer;
