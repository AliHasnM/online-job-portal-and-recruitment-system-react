import Header from "../components/Header";

const EmployerProfileSettingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Profile Settings
        </h1>
        <form className="bg-white p-8 shadow-md rounded-lg">
          {/* Company Name */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              id="companyName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              placeholder="Enter your company name"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              placeholder="Enter your email address"
            />
          </div>

          {/* Company Profile */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="companyProfile"
            >
              Company Profile
            </label>
            <textarea
              id="companyProfile"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Write a brief company profile"
            ></textarea>
          </div>

          {/* Change Password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Change Password
            </label>
            <input
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          {/* Save Changes Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployerProfileSettingPage;
