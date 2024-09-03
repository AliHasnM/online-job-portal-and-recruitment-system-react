import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [employerDropdownOpen, setEmployerDropdownOpen] = useState(false);
  const [candidateDropdownOpen, setCandidateDropdownOpen] = useState(false);

  const handleEmployerHover = () => {
    setEmployerDropdownOpen(true);
    setCandidateDropdownOpen(false);
  };

  const handleCandidateHover = () => {
    setCandidateDropdownOpen(true);
    setEmployerDropdownOpen(false);
  };

  const handleMouseLeave = () => {
    setEmployerDropdownOpen(false);
    setCandidateDropdownOpen(false);
  };

  return (
    <div className="flex justify-between py-8 text-xl font-normal tracking-tighter">
      <div className="logo cursor-pointer">Job Portal</div>
      <div className="tabs" onMouseLeave={handleMouseLeave}>
        <ul className="flex gap-12">
          <li className="cursor-pointer">Home</li>
          <li
            onMouseEnter={handleEmployerHover}
            className="relative cursor-pointer"
          >
            Employer{" "}
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 size-4" />
            {employerDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg">
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/employer">Employer</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/employer-detail">Employer Detail</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/create-company">Create Company</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/manage-resume">Manage Resume</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/add-job">Add Job</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/resume-detail">Resume Detail</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/profile-setting">Profile Setting</a>
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleCandidateHover}
            className="relative cursor-pointer"
          >
            Candidate{" "}
            <FontAwesomeIcon icon={faChevronDown} className="ml-1 size-4" />
            {candidateDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg">
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/candidate">Candidate</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/search-jobs">Search Jobs</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/manage-jobs">Manage Jobs</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/profile-setting">Profile Setting</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/job-detail">Job Detail</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  <a href="/apply-job">Apply Job</a>
                </li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="bg-gray-50 rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
            Login
          </li>
          <li className="bg-gray-50 rounded-md px-3 py-1 cursor-pointer hover:bg-gray-300">
            Register
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
