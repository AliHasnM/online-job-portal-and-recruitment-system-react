import Header from "../components/Header";
import { useState, useEffect } from "react";

const JobDetailPage = ({ match }) => {
  const [jobDetail, setJobDetail] = useState(null);

  useEffect(() => {
    // Fetch job detail based on the job ID from the URL params (assuming `match` is passed as a prop)
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(`/api/jobs/${match.params.id}`); // Adjust API endpoint
        const data = await response.json();
        setJobDetail(data);
      } catch (error) {
        console.error("Error fetching job detail:", error);
      }
    };

    fetchJobDetail();
  }, [match.params.id]);

  const handleApply = async () => {
    try {
      await fetch(`/api/jobs/${match.params.id}/apply`, {
        method: "POST",
        // You may need to add additional headers or body data depending on your API
      });
      alert("You have successfully applied for the job!");
    } catch (error) {
      console.error("Error applying for job:", error);
      alert("Failed to apply for the job.");
    }
  };

  if (!jobDetail) {
    return <div>Loading...</div>; // Show loading indicator while fetching data
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {jobDetail.title}
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <p className="text-lg text-gray-600 mb-4">{jobDetail.description}</p>
          <div className="mb-4">
            <h3 className="font-semibold">Requirements:</h3>
            <ul className="list-disc list-inside">
              {jobDetail.requirements.map((req, index) => (
                <li key={index} className="text-gray-600">
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Location:</strong> {jobDetail.location}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            <strong>Salary:</strong> ${jobDetail.salary}
          </p>
          <button
            onClick={handleApply}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Apply Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
          <p className="text-lg text-gray-600">
            <strong>Company:</strong> {jobDetail.company.companyName}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> {jobDetail.company.email}
          </p>
          <p className="text-lg text-gray-600">
            <strong>About the Company:</strong>{" "}
            {jobDetail.company.companyProfile}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
