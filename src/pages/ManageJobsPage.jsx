import Header from "../components/Header";
import { useState, useEffect } from "react";

const ManageJobsPage = () => {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    // Fetch the list of job postings from your backend API
    const fetchJobPostings = async () => {
      try {
        const response = await fetch("/api/employer/job-postings"); // Adjust API endpoint
        const data = await response.json();
        setJobPostings(data);
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };

    fetchJobPostings();
  }, []);

  const handleDelete = async (jobId) => {
    // Implement delete functionality
    try {
      await fetch(`/api/employer/job-postings/${jobId}`, {
        method: "DELETE",
      });
      setJobPostings(jobPostings.filter((job) => job.id !== jobId));
      console.log(`Deleted job with ID: ${jobId}`);
    } catch (error) {
      console.error("Error deleting job posting:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Manage Your Jobs
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Job Postings</h2>
          {jobPostings.length > 0 ? (
            <ul>
              {jobPostings.map((job) => (
                <li
                  key={job.id}
                  className="border-b border-gray-300 py-2 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.location}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="text-blue-500 hover:underline">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(job.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No job postings available. Create one to get started.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageJobsPage;
