"use client";

import React from "react";
import Image from "next/image";
import celebration1 from "../../../public/celebration1.png";
import celebration2 from "../../../public/celebration2.png";
import celebration3 from "../../../public/celebration3.png";
import celebration4 from "../../../public/celebration4.png";
import celebration5 from "../../../public/celebration5.png";
import CelebrationsBlock1 from "./CelebrationsBlock1";
import Sadhana from "./Sadhana";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: -30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeIn", delay: custom * 0.1 },
  }),
};

const Celebrations = () => {
  return (
    <motion.div id="gaamCelebration" className="bg-[#ffefd3] py-16 lg:px-20">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        className="text-[#9E1F22] font-crimson"
      >
        <h2 className="text-[40px] font-extrabold tracking-widest leading-12 text-center xl:text-5xl">
          35 Days of Gaam Celebrations
        </h2>
        <h2 className="text-2xl pt-3 font-bold text-center font-crimson xl:text-3xl">
          22<sup>nd</sup> Feb to 23<sup>rd</sup> Mar
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        className="p-6 md:px-12"
      >
        <div className="md:grid grid-cols-3 gap-5 md:mt-5">
          {/* div 1 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 flex flex-col gap-4"
          >
            <div className="relative overflow-hidden rounded-3xl flex-[1] md:mb-0">
              <Image
                alt="celebration1"
                src={celebration1}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-4">
                <h3 className="text-[22px] text-[#631019] font-poppins font-medium p-3.5 lg:text-3xl 2xl:text-5xl">
                  Flag Off With Dayro
                </h3>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden flex-[1]">
              <Image
                alt="celebration2"
                src={celebration2}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2">
                <h3 className="text-[20px] text-white font-poppins p-3.5 leading-5 lg:text-3xl lg:leading-none 2xl:text-4xl">
                  Outreach Programs of education, medical and animal care
                </h3>
              </div>
            </div>
          </motion.div>

          {/* div 2 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 md:mt-0 col-span-1 flex flex-col gap-4"
          >
            <div className="relative flex flex-col rounded-3xl overflow-hidden bg-gradient-to-t from-[#641d29] to-[#ba2124] gap-4 md:flex-[1.2]">
              <h3 className="text-[24px] text-white font-inknut font-semibold tracking-wide text-center leading-8 px-4 md:text-lg md:pt-5 xl:text-3xl 2xl:text-4xl 2xl:leading-none">
                Raj Katha for Sevarpits by Swadhyaykar
              </h3>
              <Image
                alt="celebration3"
                src={celebration3}
                className="md:absolute bottom-0 bg-contain 2xl:w-full"
              />
            </div>
            <div className="relative overflow-hidden flex-[1] md:flex-[0.6]">
              <Image
                alt="celebration4"
                src={celebration4}
                className="w-full h-full rounded-3xl"
              />
              <p className="absolute top-6 left-2 text-lg text-white font-poppins p-3.5 font-[500] mr-10 md:mr-0 md:p-0 md:text-sm lg:text-2xl 2xl:text-3xl">
                Exam on Param Krupalu Dev for students from 6th to 8th Std.
              </p>
            </div>
          </motion.div>

          {/* div 3 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-5 md:mt-0 col-span-1 flex flex-col gap-4"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#E3B055] md:flex flex-row md:py-2">
              <div className="flex justify-center">
                <Image
                  alt="celebration5"
                  src={celebration5}
                  className="w-32 object-contain md:h-32 xl:h-full"
                />
              </div>
              <h3 className="text-[16px] text-white font-inknut font-semibold tracking-wide text-center md:flex items-center lg:text-lg xl:text-2xl 2xl:px-7">
                Dharampur Got Talent
              </h3>
            </div>

            <div className="flex justify-center items-center rounded-3xl bg-[#E3B055] px-[20px] py-[13px] md:p-3 lg:p-5 flex-[0.9]">
              <h3 className="text-[19px] text-[#9E1F22] font-inknut font-[550] text-center lg:text-3xl xl:text-3xl 2xl:leading-10 2xl:p-10">
                Drama for Dharampur and surrounding villages
              </h3>
            </div>

            <div className="flex items-center justify-center rounded-3xl bg-gradient-to-t from-[#641d29] to-[#ba2124] flex-[0.6]">
              <h3 className="py-5 text-white font-inknut font-[550] text-center md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl 2xl:px-4">
                Discount on Health Checkups for Dharampur Gaam people
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <CelebrationsBlock1 />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
      >
        <Sadhana />
      </motion.div>
    </motion.div>
  );
};

export default Celebrations;
