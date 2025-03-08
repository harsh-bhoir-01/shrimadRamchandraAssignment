import React from "react";

const CelebrationsBlock1 = () => {
  return (
    <div className=" mx-6 md:mx-12  ">
      <div className=" border border-[#A52A2A] rounded-2xl p-6 mt-6 mb-2">
        <h3 className="font-crimson  text-[27px] text-[#A52A2A]  font-bold leading-5">
          Consolidated Community Development Initiatives -
          <span>Across 12 Villages</span>
        </h3>
        <ul className="font-poppins font-[500px] text-[#5C2E1F] list-disc leading-6 text-lg mt-3 ml-5">
          <li>
            Refurbishing of 25 Anganwadis and celebrations with Anganwadi kids
          </li>
          <li>Exam related Destress Program for students</li>
          <li>Toran, rangoli, mehendi competitions</li>
          <li>Sports Tournament for tribals</li>
          <li>
            Women's Day celebration with opportunity to showcase their skills
            and creativity{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CelebrationsBlock1;
