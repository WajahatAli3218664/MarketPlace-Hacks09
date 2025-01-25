
"use client";

import React, { useState } from "react";
import star from "./assets/Star.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosGitCompare } from "react-icons/io";
import Image from "next/image";
import IProduct from "@/types/foods";
import { useAppDispatch } from "@/app/store/hooks";
import { addToCart } from "@/app/store/feature/cart";

function Product({ product }: { product: IProduct }) {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  const [cartPrice, setCartPrice] = useState(product.price || 0);

  // Handle Increment
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setCartPrice(newQuantity * product.price);
  };

  // Handle Decrement
  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setCartPrice(newQuantity * product.price);
    }
  };

  function handleAddToCart() {
    const cartItem = {
      slug: product.slugs,
      title: product.name,
      img: product.imageUrl,
      price: product.price,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
  }

  // Handle notification
  const handleNotification = () => {
    toast.success("🛒Item was added to cart successfully", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="border p-4 rounded-lg">
      <Image
        src={product?.imageUrl || ""}
        width={200}
        height={200}
        alt={product?.name}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-xl font-bold mt-2">{product?.name}</h2>
      <p className="text-gray-600">{product?.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-semibold">${product?.price}</span>
        <button
          onClick={() => {
            handleAddToCart();
            handleNotification();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Product;