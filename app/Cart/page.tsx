"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { remove, updateQuantity } from "../redux/cartslice";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  _id: string;
  image?: string;
  name: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleQuantityChange = (_id: string, change: number) => {
    const item = cartItems.find((item: CartItem) => item._id === _id);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        dispatch(updateQuantity({ _id, quantity: newQuantity }));
      }
    }
  };

  const handleRemove = (_id: string) => {
    dispatch(remove(_id));
    const removedItem = cartItems.find((item: CartItem) => item._id === _id);
    setMessage(`${removedItem?.name} has been removed from the cart.`);
    setTimeout(() => setMessage(null), 3000);
  };

  const handleConfirmOrder = () => {
    if (cartItems.length === 0) {
      setMessage("Your cart is empty. Add items to confirm your order.");
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setOrderConfirmed(true);
    setMessage("Thank you! Your order has been confirmed.");
    setTimeout(() => setMessage(null), 3000);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">
          Your Shopping Cart
        </h1>

        {message && (
          <div className="max-w-xl mx-auto mb-6">
            <div className="flex items-center p-4 bg-green-50 border border-green-300 rounded-lg text-green-600">
              <span className="flex-grow font-medium text-center">{message}</span>
            </div>
          </div>
        )}

        {!orderConfirmed ? (
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4 md:space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item: CartItem) => (
                  <div
                    key={item._id}
                    className="bg-white shadow-md rounded-lg overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-4 sm:gap-6">
                      {/* Product Image */}
                      <div className="relative w-full sm:w-32 h-48 sm:h-32">
                        <div className="w-full h-full bg-gray-200 rounded-md overflow-hidden">
                          <img
                            src={item.image || "/placeholder-image.png"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Price:{" "}
                          <span className="text-gray-900 font-medium">
                            ${item.price.toFixed(2)}
                          </span>
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-center sm:justify-start space-x-4">
                          <button
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                            onClick={() => handleQuantityChange(item._id, -1)}
                          >
                            -
                          </button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                            onClick={() => handleQuantityChange(item._id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <div className="w-full sm:w-auto">
                        <button
                          className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                          onClick={() => handleRemove(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <p className="text-gray-600 text-lg mb-6">
                    Your cart is empty. Start shopping now!
                  </p>
                  <Link href="/products">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      Browse Products
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* Confirm Order Button */}
            {cartItems.length > 0 && (
              <div className="mt-8 text-center">
                <button
                  className="px-8 py-3 bg-yellow-500 text-white rounded-md shadow-lg hover:bg-yellow-600 transition-colors"
                  onClick={handleConfirmOrder}
                >
                  Confirm Order
                </button>
              </div>
            )}
          </div>
        ) : (
          // Order Confirmation Section
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  🎉 Thank You for Your Order!
                </h2>
                <p className="text-gray-600">
                  Your order has been successfully confirmed. Below are your order details:
                </p>
              </div>

              {/* Order Summary */}
              <div className="space-y-4">
                {cartItems.map((item: CartItem) => (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-md gap-2"
                  >
                    <span className="text-gray-800 font-medium">{item.name}</span>
                    <div className="flex items-center gap-4 ml-auto">
                      <span className="text-gray-600">x{item.quantity}</span>
                      <span className="text-gray-800 font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total and Checkout */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex justify-end mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Total: <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
                  </h3>
                </div>
                <div className="text-center">
                  <Link href="/payment">
                    <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition-colors">
                      Proceed to Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;