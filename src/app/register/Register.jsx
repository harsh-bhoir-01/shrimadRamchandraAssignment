"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const Register = () => {
  return (
    <div className="bg-[#ffefd3] py-16 gap-y-3.5">
      <motion.div
        className="flex justify-center items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <h1 className="font-crimson text-[40px] text-[#9E1F22] font-semibold leading-10 p-3.5">
          Shrimad Rajchandraji Padhramani Ashtahnika Mahotsav
        </h1>
      </motion.div>

      <div className="flex justify-center items-center text-center">
        <p className="text-[#A4782B] text-lg px-3.5 m-0 mb-4 md:tracking-normal tracking-wide md:px-[120px] lg:px-[150px] xl:px-80">
          125 years ago, Param Krupalu Dev Shrimad Rajchandraji blessed the
          sacred land of Dharampur with His divine presence, forever sanctifying
          it. This spiritual connection laid the foundation for the creation of
          Shrimad Rajchandra Ashram, a haven of profound sadhana and selfless
          seva.
        </p>
      </div>

      <motion.div
        className="flex justify-center items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <p className="text-[#9E1F22] font-crimson text-[25px] tracking-wide font-semibold leading-7 px-[15px] md:px-28 md:tracking-normal xl:px-80">
          Join us in celebrating the enduring legacy of
          <span> Param Krupalu Dev</span> that continues to inspire countless
          hearts.
        </p>
      </motion.div>

      <div className="flex justify-center items-center py-6">
        <button className="bg-[#9E1F22] rounded-4xl py-3.5 px-6">
          <span className="text-lg text-[#FFEFD3] font-poppins">
            Register Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default Register;
