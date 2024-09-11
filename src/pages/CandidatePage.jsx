import { useState, useEffect } from "react";
import Header from "../components/Header";

const CandidatePage = () => {
  // Simulate fetching job applications from an API
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch applications from backend API (you can replace this with real API call)
    const fetchApplications = async () => {
      const response = await fetch("/api/candidate/applications");
      const data = await response.json();
      setApplications(data);
    };
    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Candidate Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to your candidate dashboard. Manage your profile and apply for
          jobs here.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Your Applications</h2>
          {applications.length > 0 ? (
            <ul>
              {applications.map((application, index) => (
                <li
                  key={index}
                  className="border-b border-gray-300 py-2 flex justify-between"
                >
                  <div>
                    <h3 className="font-bold">{application.jobTitle}</h3>
                    <p className="text-sm text-gray-500">
                      Applied on:{" "}
                      {new Date(application.appliedDate).toDateString()}
                    </p>
                  </div>
                  <button className="text-blue-500 hover:underline">
                    View Details
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No applications found.</p>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <p className="text-gray-600">
            Update your profile information to get better job recommendations.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidatePage;
