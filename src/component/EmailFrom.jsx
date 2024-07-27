import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const EmailFrom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const validateEmail = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailPattern.test(e.target.value));
  };

  const validatePassword = (e) => {
    setPassword(e.target.value);
    setPasswordValid(e.target.value.length >= 6);
  };

  return (
    <div className="max-w-xs mx-auto flex flex-col justify-center h-full overflow-hidden rounded-lg shadow-lg bg-white p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
      <div className="flex justify-center mb-4">
        <FaUser className="text-6xl text-gray-600" />
      </div>
      <div>
        <input
          value={email}
          onChange={validateEmail}
          type="email"
          placeholder="Email"
          className={`w-full p-2 border rounded mb-4 ${
            email ? (emailValid ? "border-green-500" : "border-red-500") : ""
          }`}
        />
      </div>
      <div>
        <input
          value={password}
          onChange={validatePassword}
          type="password"
          placeholder="Password"
          className={`w-full p-2 border rounded mb-4 ${
            password
              ? passwordValid
                ? "border-green-500"
                : "border-red-500"
              : ""
          }`}
        />
      </div>
      <button className="p-2 bg-blue-500 text-white w-full rounded-lg shadow-md mt-4">
        Login
      </button>
    </div>
  );
};

export default EmailFrom;
