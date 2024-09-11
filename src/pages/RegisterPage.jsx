import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [isJobSeeker, setIsJobSeeker] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    skills: "",
    resume: null,
    companyName: "",
    companyProfile: null,
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isJobSeeker
      ? "http://localhost:8000/api/v1/jobseekers/register"
      : "http://localhost:8000/api/v1/employers/register";

    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    setIsLoading(true); // Start loading

    try {
      const response = await axios.post(url, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Registration Successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 space-y-4">
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

        <form className="space-y-6" onSubmit={handleSubmit}>
          {isJobSeeker ? (
            <div className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="text"
                name="skills"
                placeholder="Skills"
                value={formData.skills}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Profile
                </label>
                <input
                  type="file"
                  name="companyProfile"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Processing..." : "Register"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
