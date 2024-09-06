import { useState } from "react";

const Register = () => {
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
          {isJobSeeker ? (
            <div className="space-y-4">
              {/* Job Seeker Fields */}
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="text"
                placeholder="Skills"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Job Provider Fields */}
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Profile
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>
          )}
        </form>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="#" className="text-sm text-indigo-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

// const Register = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
//       <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 space-y-4">
//         {/* Role Selection */}
//         <div className="flex gap-4 justify-center py-4">
//           <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
//             Job Seeker
//           </button>
//           <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
//             Job Provider
//           </button>
//         </div>

//         {/* Form */}
//         <form className="space-y-6">
//           <div className="space-y-4">
//             <input
//               type="text"
//               placeholder="Company Name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
//             />

//             {/* Company Profile Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Company Profile
//               </label>
//               <input
//                 type="file"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600"
//               />
//             </div>
//           </div>
//         </form>

//         {/* Forgot Password */}
//         <div className="text-center">
//           <a href="#" className="text-sm text-indigo-600 hover:underline">
//             Forgot Password?
//           </a>
//         </div>

//         {/* Login Button */}
//         <div className="text-center">
//           <button className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
//             LOGIN
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
