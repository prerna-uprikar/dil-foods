"use client"
import React, { useContext } from "react";
import CartIcon from "@/assets/Cart";
import styles from "./Header.module.scss";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export default function Header() {

  const { count } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-10 bg-white">
      <div
        className={` ${styles.headerSection} flex items-center justify-between py-[10px] px-[40px]`}
      >
        <Link href="/">
        <Image
          src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
          width={70}
          height={60}
        /></Link>
        <Link
        href="/cart-page"
          title="Cart"
          className="bg-[#e30217] text-white px-[30px] py-[10px] flex gap-[10px] rounded-[6px]"
        >
          Cart {count}
          <CartIcon />
        </Link>
      </div>
    </header>
  );
}
