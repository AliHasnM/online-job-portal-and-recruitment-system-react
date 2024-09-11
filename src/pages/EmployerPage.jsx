import Header from "../components/Header";

const EmployerPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Employer Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700">Manage Jobs</h2>
            <p className="mt-2 text-gray-600">
              Post new jobs, manage applicants, and track job postings.
            </p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700">
              Company Profile
            </h2>
            <p className="mt-2 text-gray-600">
              Update company details, logo, and description.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerPage;
