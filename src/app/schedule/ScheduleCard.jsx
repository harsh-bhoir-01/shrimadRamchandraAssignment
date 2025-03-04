"use client";

import React from "react";
import { motion } from "framer-motion";
import ScheduleContainer from "./ScheduleContainer";
import { scheduleData } from "../constants/constants";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const ScheduleCard = () => {
  return (
    <>
      {scheduleData.map((S) => (
        <div
          key={S.date}
          className="px-8 xl:grid grid-cols-1 xl:grid-cols-[1fr_2fr] xl:max-w-[1200px] 2xl:max-w-[1400px] xl:mx-auto"
        >
          <div className="pt-4 xl:flex items-center">
            <motion.div
              className="flex flex-col justify-center items-center font-bold gap-y-1 2xl:leading-9 xl:items-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInVariant}
            >
              <p className="font-inknut text-[19.2px] text-[#9E1F22]">
                {S.day}
              </p>
              <h3 className="font-crimson text-4xl text-[#631019]">
                {S.title}
              </h3>
              <h3 className="font-inknut text-[19.2px] text-[#9E1F22]">
                {S.date}
              </h3>
            </motion.div>
          </div>
          <div>
            <ScheduleContainer events={S.events} image={S.image} />
          </div>
        </div>
      ))}
    </>
  );
};

export default ScheduleCard;
