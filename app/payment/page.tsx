"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Link from "next/link";
import { useState } from "react";

const PaymentPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [isPaymentComplete, setIsPaymentComplete] = useState<boolean>(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const renderPaymentDetails = () => {
    switch (paymentMethod) {
      case "creditCard":
        return (
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Cardholder Name"
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="p-3 border border-gray-300 rounded-md w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CVV"
                className="p-3 border border-gray-300 rounded-md w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case "paypal":
        return (
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="PayPal Email"
              required
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      case "bankTransfer":
        return (
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Account Number"
              required
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Bank Name"
              required
              className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        );
      default:
        return <p className="text-gray-500">Please select a payment method.</p>;
    }
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    setTimeout(() => {
      setIsPaymentComplete(true);
    }, 1000);
  };

  if (isPaymentComplete) {
    return (
      <div className="min-h-screen pt-16 md:pt-20 flex flex-col justify-center items-center bg-gray-50">
        <div className="w-full max-w-md mx-auto p-6 md:p-10 bg-white shadow-lg rounded-lg">
          <div className="text-green-500 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-16 h-16 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
              />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Thank You for Your Payment!
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Your payment has been successfully processed.
          </p>
          <Link href="/">
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all">
              Go Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 md:pt-24 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-8">
          Payment Details
        </h1>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side: Payment Method */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  Choose Payment Method
                </h2>
                <div className="space-y-4">
                  {["creditCard", "paypal", "bankTransfer"].map((method) => (
                    <label
                      key={method}
                      className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <input
                        type="radio"
                        id={method}
                        name="paymentMethod"
                        value={method}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="form-radio text-blue-600 h-5 w-5"
                      />
                      <span className="ml-4 text-lg text-gray-700">
                        {method === "creditCard"
                          ? "Credit/Debit Card"
                          : method === "paypal"
                          ? "PayPal"
                          : "Bank Transfer"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Order Summary and Payment Details */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
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

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Total:</span>
                    <span className="text-xl font-bold text-blue-600">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Payment Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Payment Details
                  </h3>
                  {renderPaymentDetails()}

                  <button
                    onClick={handlePayment}
                    disabled={!paymentMethod}
                    className="w-full mt-6 bg-blue-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Complete Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;