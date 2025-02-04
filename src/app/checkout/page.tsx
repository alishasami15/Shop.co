"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const totalAmount = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  // Log cart and customer info on checkout
  const handleCheckout = () => {
    console.log("Customer Info:", customerInfo);
    cart.forEach((item) => {
      console.log(`Product: ${item.title}, Quantity: ${item.quantity}, Price: $${item.price}`);
    });
    console.log("Total Amount:", totalAmount);

    setIsSubmitting(true);
    setTimeout(() => {
      alert("Your order has been placed successfully! 🎉");
      setIsSubmitting(false);
    }, 2000);
  };
 

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

      <div className="border border-gray-50 rounded-lg p-1 shadow-md">
        {/* Cart Items */}
        <ul className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-2 rounded-md font-semibold text-sm md:text-base">
          <li className="w-full md:w-1/6 text-center hidden md:block">Product Name</li>
          <li className="w-full md:w-1/6 text-center hidden md:block">Size</li>
          <li className="w-full md:w-1/6 text-center hidden md:block">Quantity</li>
          <li className="w-full md:w-1/6 text-center hidden md:block">Colour</li>
          <li className="w-full md:w-1/6 text-center hidden md:block">Price</li>
          <li className="w-full md:w-1/6 text-center hidden md:block">Action</li>
        </ul>

        <div className="mb-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-start p-4 border-b text-sm md:text-base"
                >
                  <span className="w-full md:w-1/6 text-left">
                    <span className="block md:hidden font-bold text-[18px]">Product Order: </span>
                    {item.title}
                  </span>
                  <span className="w-full md:w-1/6 text-left md:text-center">{item.size}</span>
                  <span className="w-full md:w-1/6 text-left md:text-center">{item.quantity}</span>
                  <span className="w-full md:w-1/6 text-left md:text-center">{item.color}</span>
                  <span className="w-full md:w-1/4 text-left md:text-center">
                    ${(Number(item.price) * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mb-4 mt-10">
        <h3 className="text-lg font-semibold">Customer Information</h3>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Name</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Email</label>
        <input
          type="email"
          className="w-full border p-2 rounded"
          name="email"
          value={customerInfo.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Phone Number</label>
        <input
          type="tel"
          className="w-full border p-2 rounded"
          name="phone"
          value={customerInfo.phone}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Address</label>
        <textarea
          className="w-full border p-2 rounded"
          name="address"
          value={customerInfo.address}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-4">
        <div className="text-xl font-semibold">
          Total Amount: ${totalAmount.toFixed(2)}
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={isSubmitting}
        className="w-full bg-black text-white py-2 rounded-lg"
      >
        {isSubmitting ? "Submit Order..." : "Submit Order"}
      </button>
    </div>
  );
};

export default CheckoutPage;