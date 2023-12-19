"use client";
import { useContext, useEffect, useState } from "react";
import itemsData from "../../utils/JSON/items.json";
import Header from "../components/header/Header";
import Image from "next/image";
import { CartContext } from "../components/context/CartContext";

export default function Page({ params }) {
  const { id } = params;
  // console.log(itemsData)
  const [productdetails, setProductDetails] = useState({});


  useEffect(() => {
    const itemDetails = itemsData.filter(item => item.id == id);
    setProductDetails(itemDetails);
  }, [id]);


  const { count, setCount, cartItem, setCartItem, addItemToCart, removeItemFromCart } =
  useContext(CartContext);


  return (
    <>
      <Header />
      <div className="itemsDetailCard">
        <h1 className="text-center font-[600] text-[30px]">
          {productdetails?.[0]?.name}
        </h1>
        <div className="p-[60px] flex justify-center flex-wrap gap-[60px] items-center">
          <Image src={productdetails?.[0]?.image} width={400} height={400} className="rounded-[6px]" />
          <div className="xl:w-[40%] ">
            <p className="text-[18px]">{productdetails?.[0]?.description}</p>
            <div className="flex justify-between pt-[50px]">
              <span className="text-[18px] font-[500]">Rs. {productdetails?.[0]?.price}</span>
              <div>
              <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px]" onClick={ () => { 
                setCount(count + 1);
                // setCartItem([...cartItem, ...productdetails])
                addItemToCart(productdetails);
              }}>
                Add
              </span>
              <span className="border border-[#e30217] text-[#e30217] px-[10px] cursor-pointer rounded-[6px] ml-[20px]" onClick={ () => { 
              
                removeItemFromCart(productdetails?.[0].id);
              }}>
                remove
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  );
}