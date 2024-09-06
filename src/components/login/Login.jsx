import { useState } from "react";

const Login = () => {
  const [isJobSeeker, setIsJobSeeker] = useState(true); // State to toggle between Job Seeker and Job Provider

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 space-y-4">
        {/* Role Selection */}
        <div className="flex gap-4 justify-center py-4">
          <button
            className={`${
              isJobSeeker ? "bg-indigo-700" : "bg-indigo-600"
            } text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200`}
            onClick={() => setIsJobSeeker(true)}
          >
            Job Seeker
          </button>
          <button
            className={`${
              !isJobSeeker ? "bg-indigo-700" : "bg-indigo-600"
            } text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200`}
            onClick={() => setIsJobSeeker(false)}
          >
            Job Provider
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
          />

          {/* Conditional rendering for different hints or messages */}
          {isJobSeeker ? (
            <div className="text-center text-sm text-gray-500">
              Logging in as <span className="font-medium">Job Seeker</span>
            </div>
          ) : (
            <div className="text-center text-sm text-gray-500">
              Logging in as <span className="font-medium">Job Provider</span>
            </div>
          )}
        </form>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <div className="text-center">
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
