import Header from "../components/Header";

const ResumeDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Resume Details
        </h1>
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            John Doe
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Position: Software Engineer
          </p>
          <p className="text-lg text-gray-700">Resume:</p>
          <p className="text-gray-600 mt-2">
            Download the resume file or view details here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetailPage;
