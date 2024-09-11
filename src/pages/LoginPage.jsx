import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isJobSeeker, setIsJobSeeker] = useState(true); // State to toggle between Job Seeker and Job Provider
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isJobSeeker
      ? "http://localhost:8000/api/v1/jobseekers/login"
      : "http://localhost:8000/api/v1/employers/login";

    try {
      const response = await axios.post(url, formData);
      console.log("Login Successful:", response.data);

      // Assuming the backend response includes a token or some user info
      const { token } = response.data; // Adjust this based on your response structure

      // Save the token or user info to localStorage or context if needed
      localStorage.setItem("token", token);

      // Redirect based on role
      if (isJobSeeker) {
        navigate("/candidate");
      } else {
        navigate("/employer");
      }
    } catch (error) {
      console.error(
        "Error during login:",
        error.response?.data || error.message
      );
    }
  };

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
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
          />
          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
          />
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
