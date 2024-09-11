import Header from "../components/Header";
import { useState } from "react";

const JobDetailPage = () => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    // Simulate applying for a job
    setApplied(true);
    console.log("Job application submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Job Details</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Software Engineer</h2>
          <p className="text-gray-700 mb-4">
            Company: <span className="font-semibold">Tech Corp</span>
          </p>
          <p className="text-lg text-gray-600 mb-4">Location: Remote</p>
          <p className="text-lg text-gray-600 mb-4">
            Salary: $80,000 - $100,000
          </p>
          <h3 className="text-xl font-semibold mb-2">Job Description:</h3>
          <p className="text-gray-600 mb-6">
            We are looking for a skilled software engineer to join our team. You
            will be responsible for developing and maintaining web applications
            using modern technologies.
          </p>
          <h3 className="text-xl font-semibold mb-2">Requirements:</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>3+ years of experience in web development</li>
            <li>Proficiency in React, Node.js, and Tailwind CSS</li>
            <li>Experience with REST APIs and databases</li>
          </ul>
          {!applied ? (
            <button
              onClick={handleApply}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            >
              Apply Now
            </button>
          ) : (
            <p className="text-green-600 font-semibold mt-4">
              You have successfully applied for this job!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
