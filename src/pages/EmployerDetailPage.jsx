import Header from "../components/Header";

const EmployerDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Company Details
        </h1>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <p className="text-lg text-gray-700 mb-4">
            Company Name: <span className="font-semibold">Tech Corp</span>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Location: <span className="font-semibold">San Francisco, CA</span>
          </p>
          <p className="text-lg text-gray-700">
            Description:{" "}
            <span className="font-semibold">
              Leading company in AI and machine learning technologies.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployerDetailPage;
