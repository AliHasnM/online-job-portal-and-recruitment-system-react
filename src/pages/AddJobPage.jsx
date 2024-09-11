import Header from "../components/Header";

const AddJobPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-3xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Post a Job
        </h1>
        <form className="bg-white p-8 shadow-md rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Job Title
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Location
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              type="text"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Salary
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
              type="number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Job Description
            </label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"></textarea>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJobPage;
