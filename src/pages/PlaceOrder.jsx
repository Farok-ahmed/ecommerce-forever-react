import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import CartTotal from "../compenents/CartTotal";
import Title from "../compenents/Title";
import { ShopContext } from "../context/ShopContext";
const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <div className=" flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h[80vh] border-t">
      {/* Left side */}
      <div className=" flex flex-col gap4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className=" border border-gray-300 rounded py-1.5 px-3.5 w-full mt-2"
        />
        <input
          type="text"
          placeholder="Street"
          className=" border border-gray-300 rounded py-1.5 px-3.5 w-full mt-2"
        />
        <div className="flex gap-3 my-2">
          <input
            type="text"
            placeholder="City"
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Stat"
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3 my-2">
          <input
            type="number"
            placeholder="Zipcode"
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Country"
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className=" border border-gray-300 rounded py-1.5 px-3.5 w-full mt-2"
        />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className=" mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className=" flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className=" flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method == "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpy")}
              className=" flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method == "razorpy" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className=" flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method == "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className=" uppercase text-gray-500 font-medium text-sm">
                cash on delivery
              </p>
            </div>
          </div>
          <div className=" w-full text-end mt-8">
            <button
              onClick={() => navigate("/orders")}
              className="bg-black text-white px-16 py-3 text-sm uppercase"
            >
              place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
