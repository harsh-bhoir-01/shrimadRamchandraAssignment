"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import header from "../../../public/header.png";
import hamburger from "../../../public/hamburger.svg";
import closeIcon from "../../../public/closeIcon.svg";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = [
    { label: "Register", href: "#" },
    { label: "Schedule", href: "#schedule" },
    { label: "Gaam Celebrations", href: "#gaamCelebration" },
    { label: "Laabhs", href: "#laabh" },
    { label: "Reserve Your Stay", href: "#reserveYourDay" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [menuOpen]);

  return (
    <section className="container max-w-full bg-[#631019] py-6">
      <div className="flex xl:px-20 justify-between px-6 lg:pr-16">
        <div>
          <Image
            alt="logo"
            width={206}
            height={36}
            src={header}
            className="block md:hidden"
          />
          <Image
            alt="logo"
            src={header}
            width={300}
            height={52}
            className="hidden md:block"
          />
        </div>

        {isMobile && (
          <div className="lg:hidden">
            <button
              className="border border-white rounded-sm w-10 h-9 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Image
                className="invert py-1"
                alt="menu"
                width={24}
                height={14}
                src={menuOpen ? closeIcon : hamburger}
              />
            </button>
          </div>
        )}

        {!isMobile && (
          <nav className="text-[#FFF8E6] font-medium text-[16px] font-poppins hidden lg:flex">
            <ul className="xl:gap-6 xl:pr-32 lg:pt-3 gap-4 flex">
              {navLinks.map((link, index) => (
                <li key={link.label}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            className="fixed top-0 left-0  md:w-[400px] h-full bg-[#79182D] z-50 menu-container"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex justify-between items-center p-6">
              <Image
                alt="logo"
                src={header}
                width={230}
                height={44}
                className=""
              />
              <button onClick={() => setMenuOpen(false)}>
                <Image alt="close" width={30} height={30} src={closeIcon} />
              </button>
            </div>

            <nav className="mt-6">
              <ul className="flex flex-col text-white text-lg px-6">
                {navLinks.map((link, index) => (
                  <li
                    key={link.label}
                    className={`py-2 border-b ${index === 0 ? "border-t" : ""}`}
                  >
                    <Link href={link.href} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NavBar;
