import React, { useState } from "react";
import { motion } from "framer-motion";

const SignIn = () => {
  const [showForm, setShowForm] = useState("signin");

  const handleButtonClick = (formType) => {
    setShowForm(formType);
  };

  const fadeVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div className="px-4 lg:px-0">
      <div className="container mt-16 border border-gray-200 rounded-xl shadow-sm md:w-[70%] lg:w-[40%] mx-auto px-6 lg:p-16 lg:py-12 py-8">
        <div className="flex justify-around gap-14 mb-8">
          <button className={`text-xl font-semibold pb-2 ${showForm === "signin" ? "border-b-2 border-[#0D4C90]" : ""}`}
            onClick={() => handleButtonClick("signin")}>
            Sign In
          </button>
          <button className={`text-xl font-semibold pb-2 ${showForm === "register" ? "border-b-2 border-[#0D4C90]" : ""}`}
          onClick={() => handleButtonClick("register")}>
          Register
        </button>
        </div>

        <div>
          {showForm === "signin" && (
            <motion.form
              action=""
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariant}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-1">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="border rounded-xl border-gray-300 focus:outline-none p-3"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label htmlFor="" className="mb-1">
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="border rounded-xl border-gray-300 focus:outline-none p-3"
                />
              </div>
              <div className="flex items-center gap-5">
                <button className="p-2 rounded-xl px-6 bg-[#0D4C90] text-white ">
                  Login
                </button>
                <button>Forget password?</button>
              </div>
            </motion.form>
          )}

          {showForm === "register" && (
            <motion.form
              action=""
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariant}
              transition={{ duration: 0.5 }}
            >
              {/* Registration form fields go here */}
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="border rounded-xl border-gray-300 focus:outline-none p-3"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-1">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="border rounded-xl border-gray-300 focus:outline-none p-3"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label htmlFor="" className="mb-1">
                  Password
                </label>
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="border rounded-xl border-gray-300 focus:outline-none p-3"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label htmlFor="" className="mb-1">
                  Confirm Password
                </label>
                <input
                  type="text"
                  placeholder="Enter Confirm Password"
                  className="border rounded-xl border-gray-300 focus:outline-none p-3"
                />
              </div>
              <div className="flex items-center gap-5">
                <button className="p-2 rounded-xl px-6 bg-[#0D4C90] text-white ">
                  Register
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
