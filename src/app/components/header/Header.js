import React from "react";
import CartIcon from "@/assets/Cart";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div
        className={` ${styles.headerSection} flex items-center justify-between py-[10px] px-[40px]`}
      >
        <Image
          src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
          width={70}
          height={60}
        />
        <button
          title="Cart"
          className="bg-[#e30217] text-white px-[30px] py-[10px] flex gap-[10px] rounded-[6px]"
        >
          Cart
          <CartIcon />
        </button>
      </div>
    </header>
  );
}
