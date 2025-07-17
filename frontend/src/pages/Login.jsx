import { useState, useContext } from "react";
import { CglContext } from "../context/CglContext";
import axios from "axios";

const Login = () => {
  const { url, setToken } = useContext(CglContext);
  const [currentState, setCurrentState] = useState("Login"); // "Login" or "Sign Up"

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setData({ name: "", email: "", password: "" }); // Clear fields on success
        if (currentState === "Login") {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);

          alert("Login Successful!");
        } else {
          alert("Sign Up Successful! Please log in.");
          setCurrentState("Login");
        }
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      console.error("Login/Register failed:", err);

      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const switchMode = () => {
    setCurrentState((prev) => (prev === "Login" ? "Sign Up" : "Login"));
    setData({ name: "", email: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-100px)] bg-gray-50 p-4 sm:p-6">
      <form
        onSubmit={onLogin}
        // Styling for the form container: max-width, padding, shadow, rounded corners
        className="w-full max-w-sm bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-xl border border-gray-600 transform transition-all duration-300 hover:shadow-2xl"
      >
        {/* Title and Separator */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-2">
            {currentState}
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
        </div>

        {/* Input Fields Container */}
        <div className="flex flex-col gap-5 mb-6">
          {currentState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
              // Input field styling: consistent, focus effects
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base text-gray-800 placeholder-gray-500"
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base text-gray-800 placeholder-gray-500"
          />

          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-base text-gray-800 placeholder-gray-500"
          />
        </div>

        {/* Forgot Password / Switch Mode */}
        <div className="w-full flex justify-between text-sm text-gray-600 mb-8">
          <p className="cursor-pointer hover:underline text-blue-600">
            Forgot Password?
          </p>
          <p
            onClick={switchMode}
            className="cursor-pointer hover:underline text-blue-600 font-medium"
          >
            {currentState === "Login" ? "Create an account" : "Login here"}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300 text-lg"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
