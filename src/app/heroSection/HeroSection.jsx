import React from "react";
import Image from "next/image";
import banner from "../../../public/banner.png";
import bannerMd from "../../../public/banner_md.png";
import bannerLg from "../../../public/banner_lg.png";
import bannerXl from "../../../public/banner_xl.png";
import bannerXxl from "../../../public/banner_xxl.png";

const HeroSection = () => {
  return (
    <div className="mt-20">
      <Image
        alt="banner"
        width={320}
        height={520}
        src={banner}
        className="w-full md:hidden lg:hidden"
      />
      <Image
        alt="banner"
        width={768}
        height={337}
        src={bannerMd}
        className="hidden md:block lg:hidden w-full"
      />
      <Image
        alt="banner"
        width={1024}
        height={449}
        src={bannerLg}
        className="hidden lg:block xl:hidden w-full"
      />
      <Image
        alt="banner"
        width={1440}
        height={632}
        src={bannerXl}
        className="hidden xl:block 2xl:hidden w-full"
      />
      <Image
        alt="banner"
        width={2560}
        height={1124}
        src={bannerXxl}
        className="hidden 2xl:block w-full"
      />
    </div>
  );
};

export default HeroSection;
