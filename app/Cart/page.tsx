/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import { remove } from "../redux/cartslice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Image from "next/image";
import { useState } from "react";

interface Cartitem {
  _id: any;
  image?: string; // Made optional to handle missing images
  name: string;
  price: number;

}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const Cartitems = useSelector((state: RootState) => state.cart);
  const [message, setMessage] = useState<string | null>(null);
  const [voucher, setVoucher] = useState<string | null>(null);

  const handleRemove = (_id: any) => {
    dispatch(remove(_id));
    const removedItem = Cartitems.find((item: Cartitem) => item._id === _id);
    setMessage(`${removedItem?.name} has been removed from the cart.`);
    setTimeout(() => setMessage(null), 3000); // Clear message after 3 seconds
  };

  const handleCheckout = () => {
    if (Cartitems.length === 0) {
      setMessage("Your cart is empty. Add items to checkout!");
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    // Generate a simple voucher (you can enhance it as needed)
    const voucherCode = `#${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    const voucherDetails = `
      🎟️ Voucher Code: ${voucherCode}

      🛒 Items Purchased:
      ${Cartitems.map((item, index) => `${index + 1}. ${item.name}`).join("\n  ")}

      📅 Date: ${new Date().toLocaleDateString()}
      🕒 Time: ${new Date().toLocaleTimeString()}
    `;

    setVoucher(voucherDetails);
    setMessage("Checkout successful! Here is your voucher.");
    setTimeout(() => setMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
      {/* Page Title */}
      <h3 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
        Your Shopping Cart
      </h3>

      {/* Notification Message */}
      {message && (
        <div className="flex items-center max-w-xl mx-auto text-green-600 font-medium mb-6 p-4 bg-green-50 border border-green-300 rounded-md">
          <span className="material-icons-outlined mr-2">check_circle</span>
          {message}
        </div>
      )}

      {/* Cart Items */}
      <div className="max-w-5xl mx-auto space-y-8">
        {Cartitems.length > 0 ? (
          Cartitems.map((item: Cartitem) => (
            <div
              key={item._id}
              className="flex items-center bg-white shadow-lg rounded-lg p-6 space-x-6"
            >
              {/* Image Section */}
              <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-md overflow-hidden">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={128}
                    width={128}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src="/placeholder-image.png"
                    alt="Placeholder"
                    height={128}
                    width={128}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>

              {/* Content Section */}
              <div className="flex-grow">
                <h5 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h5>
                <p className="text-gray-600 text-sm mt-2">
                  Price:{" "}
                  <span className="text-gray-900 font-medium">
                    ${item.price.toFixed(2)}
                  </span>
                </p>
              </div>

              {/* Remove Button */}
              <div>
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-md shadow hover:bg-red-600 transition-all"
                  onClick={() => handleRemove(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">
            Your cart is empty. Start shopping now!
          </p>
        )}
      </div>

      {/* Checkout Section */}
      <div className="max-w-5xl mx-auto mt-10 text-center">
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>

      {/* Voucher Section */}
      {voucher && (
        <div className="max-w-5xl mx-auto mt-10 bg-gradient-to-br from-blue-100 to-gray-50 p-6 shadow-xl rounded-lg border">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">🎉 Your Voucher</h4>
          <pre className="bg-gray-100 p-4 rounded-md text-left text-gray-700 whitespace-pre-wrap">
            {voucher}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Cartpage;


