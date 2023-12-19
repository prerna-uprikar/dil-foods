"use client"
import Image from "next/image";
import styles from "./CartSection.module.scss";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export default function CartSection() {

    const { cartItem } =
        useContext(CartContext);

    console.log("Cart ", { cartItem })

    return (
        <>
            <div className={styles.cartSection}>
                <h2 className="text-center pt-[50px] text-[40px]">Cart</h2>
                {cartItem.map(i =>
                    <div className="flex gap-[40px] justify-center pt-[50px] pb-[20px]">
                        <div className="productimage">
                            <Image src={i.image} height={300} width={300} />
                        </div>
                        <div>
                            <div className="flex gap-[40px] pb-[10px]">
                                <h2 className="w-[150px]">Product Name:</h2>
                                <h2>{i.name}</h2>
                            </div>
                            <div className="flex gap-[40px] pb-[10px]">
                                <h2 className="w-[150px]">Price</h2>
                                <h2>{i.price}</h2>
                            </div>
                            <div className="flex gap-[40px] pb-[10px]">
                                <h2 className="w-[150px]">Quantity</h2>
                                <h2>{i.quantity}</h2>
                            </div>
                            <hr style={{ color: "black" }} />
                            <div className="flex gap-[40px] pt-[10px]">
                                <h2 className="w-[150px]">total</h2>
                                <h2>300</h2>
                            </div>
                            <div className="pt-[40px]">
                                <button className="text-white bg-[#e30217]  px-[30px] py-[10px]  gap-[10px] rounded-[6px]">Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    );
}