import Header from "../components/Header";

const JobSeekerProfileSettingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Profile Settings
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Update Your Profile</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfileSettingPage;
