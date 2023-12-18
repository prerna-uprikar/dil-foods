import React from "react";
import Image from "next/image";
import styles from "./ProductSection.module.scss";

export default function ProductSection() {
  return (
    <section className="my-[40px]">
      <h1 className="text-[28px] lg:text-[40px] text-[#590109] text-center mt-[40px] mb-[60px]">
        Our Products
      </h1>
      <div className="flex flex-wrap justify-center gap-[60px]">
        <div className={`${styles.productCard}`}>
          <Image
            src="https://luna-meraki.svc.urbanpiper.com/_next/image?url=https%3A%2F%2Fcdn.urbanpiper.com%2Fmedia%2Fbizmedia%2F2023%2F10%2F30%2FQrWqf-OwI8S6A0GpeI0yap4PhR65rAmrvhga17AFUUt1cT.jpg&q=80&w=320"
            height="200"
            width="300"
            alt="product image"
          />
          <h2 className="text-center pt-[10px] text-[18px] font-[500]">
            Garlic Bread
          </h2>
          <div className="flex justify-between p-[20px]">
            <span className="text-green">Rs.40</span>
            <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px]">
              Add
            </span>
          </div>
        </div>

        <div className={`${styles.productCard}`}>
          <Image
            src="https://luna-meraki.svc.urbanpiper.com/_next/image?url=https%3A%2F%2Fcdn.urbanpiper.com%2Fmedia%2Fbizmedia%2F2023%2F10%2F30%2FkIuGWV-0uD0ME3stV4zVdayrUkS84iR4H9pednOqFsRjeRF.jpg&q=80&w=320"
            height="300"
            width="300"
            alt="product image"
          />
          <h2 className="text-center pt-[10px] text-[18px] font-[500]">
            Chicken Grilled Salad
          </h2>
          <div className="flex justify-between p-[20px]">
            <span className="text-green">Rs.40</span>
            <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px]">
              Add
            </span>
          </div>
        </div>

        <div className={`${styles.productCard}`}>
          <Image
            src="https://luna-meraki.svc.urbanpiper.com/_next/image?url=https%3A%2F%2Fcdn.urbanpiper.com%2Fmedia%2Fbizmedia%2F2023%2F10%2F30%2FW2ky5Kb-EA2RDAPxreEQsvRAKCCfCPQI86A6NLTLC0juF8IZ.jpg&q=80&w=320"
            height="300"
            width="300"
            alt="product image"
          />
          <h2 className="text-center pt-[10px] text-[18px] font-[500]">
            Raspberry Cheesecake
          </h2>
          <div className="flex justify-between p-[20px]">
            <span className="text-green">Rs.40</span>
            <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px]">
              Add
            </span>
          </div>
        </div>

        <div className={`${styles.productCard}`}>
          <Image
            src="https://luna-meraki.svc.urbanpiper.com/_next/image?url=https%3A%2F%2Fcdn.urbanpiper.com%2Fmedia%2Fbizmedia%2F2023%2F10%2F30%2FOHWAf-bcdD64Jv6PzgV5T6PckEC0MQ9U09fYVMF7xB3Jsu.jpg&q=80&w=320"
            height="300"
            width="300"
            alt="product image"
          />
          <h2 className="text-center pt-[10px] text-[18px] font-[500]">
            Creamy Spinach
          </h2>
          <div className="flex justify-between p-[20px]">
            <span className="text-green">Rs.40</span>
            <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px]">
              Add
            </span>
          </div>
        </div>

        <div className={`${styles.productCard}`}>
          <Image
            src="https://luna-meraki.svc.urbanpiper.com/_next/image?url=https%3A%2F%2Fcdn.urbanpiper.com%2Fmedia%2Fbizmedia%2F2023%2F10%2F30%2FQd0h1a-QAV1RaaebAZZdNrcAhemyQ8K520IzmU2PpuxB6pG.jpg&q=80&w=320"
            height="300"
            width="300"
            alt="product image"
          />
          <h2 className="text-center pt-[10px] text-[18px] font-[500]">
            Veg Salad
          </h2>
          <div className="flex justify-between p-[20px]">
            <span className="text-green">Rs.40</span>
            <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px]">
              Add
            </span>
          </div>
        </div>

        <div className={`${styles.productCard}`}>
          <Image
            src="https://luna-meraki.svc.urbanpiper.com/_next/image?url=https%3A%2F%2Fcdn.urbanpiper.com%2Fmedia%2Fbizmedia%2F2023%2F10%2F30%2FBU2TZUXG-iSSNOLKIVPny6oeMeCcnOcELiVjGLD6obpnwxfRe.jpg&q=80&w=320"
            height="300"
            width="300"
            alt="product image"
          />
          <h2 className="text-center pt-[10px] text-[18px] font-[500]">
            Penne in Cream Sauce
          </h2>
          <div className="flex justify-between p-[20px]">
            <span className="text-green">Rs.40</span>
            <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px]">
              Add
            </span>
          </div>
        </div>

        <div className={`${styles.productCard}`}>
          <Image
            src="https://luna-meraki.svc.urbanpiper.com/_next/image?url=https%3A%2F%2Fcdn.urbanpiper.com%2Fmedia%2Fbizmedia%2F2023%2F10%2F30%2Fjzwguk-pe8g2rrQkhTzgtTJcLopIc78yYZoXIVHpKRo1l3D.jpg&q=80&w=320"
            height="300"
            width="300"
            alt="product image"
          />
          <h2 className="text-center pt-[10px] text-[18px] font-[500]">
            Dough Balls Doppio
          </h2>
          <div className="flex justify-between p-[20px]">
            <span className="text-green">Rs.40</span>
            <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px]">
              Add
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
