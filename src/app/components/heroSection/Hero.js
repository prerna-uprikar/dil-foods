import React from "react";

export default function Hero() {
  return (
    <section className="h-[350px] lg:h-[500px] bg-[#590109] flex flex-col justify-center items-center">
      <h1 className="text-white text-[24px] lg:text-[48px]">Good Food, Good Life !</h1>
      <a title="Order" href="#products" className="border border-white px-[20px] py-[10px] rounded-[6px] font-[500] text-[white] text-[14px] lg:text-[18px] mt-[30px] hover:bg-white hover:text-[#590109]">Let's Order</a>
    </section>
  );
}
