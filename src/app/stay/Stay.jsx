import React from "react";

const Stay = () => {
  return (
    <div>
      <section className="w-full py-10 sm:py-12 px-3 sm:px-20 bg-white flex flex-col justify-center items-center">
        <h3 className="text-[40px] font-crimson text-[#9E1F22] pb-8 text-center font-bold">
          Reserve Your Stay
        </h3>
        <p className=" text-center text-lg italic text-[#A4782B] font-poppins pb-8">
          We warmly invite everyone to be part of this historic event. Family
          rooms will be available for stay
          <br />
          till 26th Mar. To maximize accommodation for mumukshus, only shared
          rooms and hall dormitory
          <br />
          options will be available from 27th Mar onwards. Apply now by clicking
          below.
        </p>
        <a className=" text-white rounded-full px-6 py-3 font-medium bg-[#9e1f22]">
          Reserve Your Stay
        </a>
      </section>
    </div>
  );
};

export default Stay;
