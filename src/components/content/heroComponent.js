import React from "react";

export function HeroComponent() {
  return (
    <div className="flex justify-center items-center w-full h-[110vh] pt-20">
      <div className="absolute w-[50%] h-[100%] bg-gradient-to-br from-[#8AAAE5] bg-opacity-0 blur-3xl rounded-full -top-[20%] -left-[40%] border"></div>
      <div className="absolute -z-10 w-[80%] h-[100%] bg-gradient-to-br from-[#8AAAE5] bg-opacity-0 blur-3xl rounded-full -bottom-[50%] -right-[75%] border"></div>
      <div className="flex  h-[80%] w-[90%]">
        <div className="flex flex-col gap-10 w-[50%] h-full">
          <h2 className="text-7xl font-extrabold text-left">
            Unveiling the Essence of Me My Personal Profile Journey
          </h2>
          <p className="text-left font-semibold pr-24">
            Connect with my soul and spirit through the personal experiences I
            share in this profile. Come explore the enlightening stories,
            inspiring impressions, and dreams I'm pursuing together.
          </p>
        </div>
      </div>
    </div>
  );
}
