import Header from "../components/Header";
import { useState } from "react";

const SearchJobsPage = () => {
  const [query, setQuery] = useState("");
  const [jobResults, setJobResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    // Simulated job search API call (replace with actual API call)
    console.log(`Searching for: ${query}`);
    const response = await fetch(`/api/jobs?search=${query}`);
    const data = await response.json();
    setJobResults(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Search Jobs</h1>
        <input
          type="text"
          placeholder="Search for jobs..."
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>

        <div className="mt-6">
          {/* Display job search results here */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Job Results</h2>
            {jobResults.length > 0 ? (
              <ul>
                {jobResults.map((job, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-300 py-2 flex justify-between"
                  >
                    <div>
                      <h3 className="font-bold">{job.title}</h3>
                      <p className="text-sm text-gray-500">
                        {job.location} | {job.salary}
                      </p>
                    </div>
                    <button className="text-blue-500 hover:underline">
                      Apply
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                No jobs found. Try a different search.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchJobsPage;
