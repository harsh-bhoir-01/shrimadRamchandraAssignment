import React from "react";
import Image from "next/image";
import celebration1 from "../../../public/celebration1.png";
import celebration2 from "../../../public/celebration2.png";
import celebration3 from "../../../public/celebration3.png";
import celebration4 from "../../../public/celebration4.png";
import celebration5 from "../../../public/celebration5.png";

const Celebrations = () => {
  return (
    <div id="gaamCelebration" className=" bg-[#ffefd3] py-16 ">
      <div className="text-[#9E1F22] font-crimson grid grid-rows-2 items-center text-center justify-center ">
        <h2 className="text-[40px] font-bold tracking-normal leading-10">
          35 Days of Gaam Celebrations
        </h2>
        <h2 className="text-2xl font-semibold">
          22<sup>nd</sup> Feb to 23<sup>rd</sup> Mar
        </h2>
      </div>
      <div className=" p-5 ">
        <div className="md:hidden">
          {/* div 1 */}
          <div>
            <div className="relative  rounded-3xl overflow-hidden mb-5 ">
              <Image
                alt="celebration1"
                src={celebration1}
                className=" w-full min-w-[280px] min-h-[243px] object-cover "
              />
              <div className="absolute top-4 left-5">
                <h3 className="text-[22px] text-[#631019] font-poppins font-medium p-3.5">
                  Flag Off With Dayro
                </h3>
              </div>
            </div>
            <div className="relative  rounded-3xl overflow-hidden">
              <Image
                alt="celebration1"
                src={celebration2}
                className=" w-full min-w-[280px] min-h-[243px] object-cover "
              />
              <div className="absolute top-2 left-2">
                <h3 className="text-[20px] text-white font-poppins  p-3.5 leading-5">
                  Outreach Programs of education, medical and animal care
                </h3>
              </div>
            </div>
          </div>
          {/* div 2 */}
          <div className="mt-5">
            <div className="min-w-[280] min-h-[333px] relative  rounded-3xl overflow-hidden mb-5 bg-gradient-to-t from-[#641d29] to-[#ba2124] ">
              <Image
                alt="celebration1"
                src={celebration3}
                className=" w-full absolute bottom-0 left-0  object-cover "
              />
              <div className="absolute top-10 left-0">
                <h3 className="text-[24px] text-white font-inknut font-semibold tracking-wide text-center leading-8">
                  Raj Katha for Sevarpits by Swadhyaykar
                </h3>
              </div>
            </div>
            <div className="relative   rounded-3xl overflow-hidden">
              <Image
                alt="celebration1"
                src={celebration4}
                className=" w-full min-w-[280px] min-h-[191px] object-cover "
              />
              <div className="absolute top-6 left-2 ">
                <p className="text-[20px] text-white font-poppins  p-3.5 font-[500] mr-10 ">
                  Exam on Param Krupalu Dev for students from 6th to 8th Std.
                </p>
              </div>
            </div>
          </div>
          {/* div 3 */}
          <div className="mt-5">
            <div className="relative  rounded-3xl overflow-hidden mb-5 min-w-[260px] min-h-[360px] bg-[#E3B055] py-9 px-3.5 md:grid grid-cols-2">
              <div>
                <Image
                  alt="celebration1"
                  src={celebration5}
                  className="min-w-[145px] min-h-[250px]  absolute bottom-7  object-cover left-16"
                />
              </div>
              <div className="flex justify-center">
                <h3 className="text-[16px] text-white font-inknut font-semibold tracking-wide text-center leading-8 ">
                  Dharampur Got Talent
                </h3>
              </div>
            </div>
            <div className=" min-w-[260px] min-h-[110px] flex rounded-3xl bg-[#E3B055] px-[20px]  py-[13px]">
              <h3 className="text-[19px] text-[#9E1F22] font-inknut font-[550] text-center  ">
                Drama for Dharampur and surrounding villages
              </h3>
            </div>
          </div>
          {/* div4 */}
          <div className=" min-w-[280px] min-h-[188px] flex rounded-3xl bg-gradient-to-t from-[#641d29] to-[#ba2124] px-[15px]  py-[30px] mt-5">
            <h3 className="text-[25px] text-white font-inknut font-[550] text-center ">
              Discount on Health Checkups for Dharampur Gaam people
            </h3>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid h-full w-full grid-cols-6 grid-rows-2 gap-4 ">
          <div>
            <div className="col-span-2 row-span-2 flex flex-col gap-6">
              {" "}
              <div className="bg-amber-500 text-5xl">hello1</div>
              <div className="bg-amber-600 text-5xl">hello2</div>
            </div>
            <div className=" col-span-2 row-span-2 flex flex-col gap-16">
              <div className="bg-amber-200 text-5xl">hello3</div>
              <div className="bg-amber-300 text-5xl">hello4</div>
            </div>
            <div className=" col-span-2 row-span-2">
              <div className="bg-amber-100 text-5xl">hello5</div>
              <div className="bg-amber-400 text-5xl">hello6</div>
            </div>
            <div className=" col-span-2 row-span-1">
              <div className="bg-amber-6700 text-5xl">hello7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celebrations;
