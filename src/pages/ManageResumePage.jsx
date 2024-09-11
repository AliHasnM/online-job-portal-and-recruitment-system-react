import Header from "../components/Header";

const ManageResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Manage Resumes
        </h1>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <p className="text-lg text-gray-700">
            Here you can view and manage all the resumes submitted to your job
            postings.
          </p>
          <div className="mt-6 space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Applied for: Software Engineer</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Jane Smith
              </h3>
              <p className="text-gray-600">Applied for: Data Scientist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageResumePage;
