// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EmployerPage from "./pages/EmployerPage";
import EmployerDetailPage from "./pages/EmployerDetailPage";
import CreateCompanyPage from "./pages/CreateCompanyPage";
import ManageResumePage from "./pages/ManageResumePage";
import AddJobPage from "./pages/AddJobPage";
import ResumeDetailPage from "./pages/ResumeDetailPage";
import EmployerProfileSettingPage from "./pages/EmployerProfileSettingPage";
import CandidatePage from "./pages/CandidatePage";
import SearchJobsPage from "./pages/SearchJobsPage";
import ManageJobsPage from "./pages/ManageJobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import JobSeekerProfileSettingPage from "./pages/JobSeekerProfileSettingPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotificationsPage from "./pages/NotificationsPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employer" element={<EmployerPage />} />
          <Route path="/employer-detail" element={<EmployerDetailPage />} />
          <Route path="/create-company" element={<CreateCompanyPage />} />
          <Route path="/manage-resume" element={<ManageResumePage />} />
          <Route path="/add-job" element={<AddJobPage />} />
          <Route path="/resume-detail" element={<ResumeDetailPage />} />
          <Route
            path="/employer-profile-setting"
            element={<EmployerProfileSettingPage />}
          />
          <Route path="/candidate" element={<CandidatePage />} />
          <Route path="/search-jobs" element={<SearchJobsPage />} />
          <Route path="/manage-jobs" element={<ManageJobsPage />} />
          <Route path="/job-detail" element={<JobDetailPage />} />
          <Route path="/apply-job" element={<ApplyJobPage />} />
          <Route
            path="/jobseeker-profile-setting"
            element={<JobSeekerProfileSettingPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

// // src/App.js
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import JobDetailsPage from "./pages/JobDetailsPage";
// import JobSearchPage from "./pages/JobSearchPage";
// import ApplicationStatusPage from "./pages/ApplicationStatusPage";
// import NotificationsPage from "./pages/NotificationsPage";
// // import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// // import Home from "./pages/HomePage";

// const App = () => {
//   return (
//     <Router>
//       <main className="">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/search" element={<JobSearchPage />} />
//           <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
//           <Route
//             path="/application-status"
//             element={<ApplicationStatusPage />}
//           />
//           <Route path="/notifications" element={<NotificationsPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
