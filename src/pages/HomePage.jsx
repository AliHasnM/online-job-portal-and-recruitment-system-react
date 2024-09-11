import { useState, useEffect } from "react";
import Header from "../components/Header";
import bgImage from "../assets/bgImageHome3.jpg";
import JobList from "../components/JobList";
import { fetchJobs } from "../api/jobPostingApi";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const loadJobs = async () => {
      const result = await fetchJobs();
      setJobs(result.data);
    };
    loadJobs();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const result = await fetchJobs({ query, location, category });
    setJobs(result.data);
  };

  return (
    <div
      className="bg-cover h-screen px-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <div className="heading text-gray-900 font-extrabold text-left py-14 tracking-tighter">
        <span className="text-[2.3rem]">Search Between More</span>
        <span className="block text-[3.3rem]">
          Then{" "}
          <span className="font-bold border bg-green-50 rounded-md px-1">
            50,000
          </span>{" "}
          Open Jobs
        </span>
      </div>
      <div className="keyword text-gray-900 text-left text-xl font-semibold tracking-tighter">
        <span className="block pb-2 text-gray-800">Trending Jobs Keyword:</span>
        <span className="inline-block mx-2 bg-gray-50 rounded-md px-[0.5rem] cursor-pointer hover:bg-gray-300">
          Web Designer
        </span>
        <span className="inline-block mx-2 bg-gray-50 rounded-md px-[0.5rem] cursor-pointer hover:bg-gray-300">
          Web Developer
        </span>
        <span className="inline-block mx-2 bg-gray-50 rounded-md px-[0.5rem] cursor-pointer hover:bg-gray-300">
          IOS Developer
        </span>
        <span className="inline-block mx-2 bg-gray-50 rounded-md px-[0.5rem] cursor-pointer hover:bg-gray-300">
          Android Developer
        </span>
      </div>
      <form className="flex py-8 font-semibold" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search keyword..."
          className="py-3 px-5 rounded-l-full border-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select
          name="location"
          className="py-3 px-5 border"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Location</option>
          <option value="All">All Country</option>
          <option value="American">American</option>
          <option value="Australia">Australia</option>
          <option value="Pakistan">Pakistan</option>
        </select>
        <select
          name="category"
          className="py-3 px-5 border"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Web Designer">Web Designer</option>
          <option value="Web Developer">Web Developer</option>
          <option value="IOS Developer">IOS Developer</option>
          <option value="Android Developer">Android Developer</option>
        </select>
        <button
          type="submit"
          className="py-3 px-5 rounded-r-full bg-blue-500 text-white"
        >
          Search
        </button>
      </form>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Home;

// import Header from "../components/Header";
// // import bgImage from "../../assets/bgImageHome.jpg";
// // import bgImage from "../../assets/bgImageHome1.jpg";
// // import bgImage from "../../assets/bgImageHome2.jpg";
// import bgImage from "../assets/bgImageHome3.jpg";
// // import bgImage from "../../assets/bgImageHome4.jpg";
// const Home = () => {
//   return (
//     <div
//       className="bg-cover h-screen px-16"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <Header />
//       <div className="heading text-gray-900 font-extrabold text-left py-14 tracking-tighter">
//         <span className="text-[2.3rem]">Search Between More</span>
//         <span className="block text-[3.3rem]">
//           Then{" "}
//           <span className="font-bold border bg-green-50 rounded-md px-1">
//             50,000
//           </span>{" "}
//           Open Jobs
//         </span>
//       </div>
//       <div className="keyword text-gray-900 text-left text-xl font-semibold tracking-tighter">
//         <span className="block pb-2 text-gray-800">Trending Jobs Keyword:</span>
//         <span className="inline-block mx-2 bg-gray-50 rounded-md px-[0.5rem] cursor-pointer hover:bg-gray-300">
//           Web Designer
//         </span>
//         <span className="inline-block mx-2 bg-gray-50 rounded-md px-[0.5rem] cursor-pointer hover:bg-gray-300">
//           Web Developer
//         </span>
//         <span className="inline-block mx-2 bg-gray-50 rounded-md px-[0.5rem] cursor-pointer hover:bg-gray-300">
//           IOS Developer
//         </span>
//         <span className="inline-block mx-2 bg-gray-50 rounded-md px-[0.5rem] cursor-pointer hover:bg-gray-300">
//           Android Developer
//         </span>
//       </div>
//       <div className="search flex py-8 font-semibold">
//         <input
//           type="text"
//           placeholder="Search keyword..."
//           className="py-3 px-5 rounded-l-full border-none"
//         />
//         <select name="location" className="py-3 px-5 border">
//           <option value="">Location</option>
//           <option value="All">All Country</option>
//           <option value="American">American</option>
//           <option value="Australia">Australia</option>
//           <option value="Pakistan">Pakistan</option>
//         </select>
//         <select name="category" className="py-3 px-5 border">
//           <option value="">Category</option>
//           <option value="Web Designer">Web Designer</option>
//           <option value="Web Developer">Web Developer</option>
//           <option value="IOS Developer">IOS Developer</option>
//           <option value="Android Developer">Android Developer</option>
//         </select>
//         <button className="py-3 px-5 rounded-r-full bg-blue-500 text-white">
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

// // import Header from "../header/Header";

// // const Home = () => {
// //   return (
// //     <div>
// //       <Header />
// //       <div className="heading">
// //         <span>Search Between More</span>
// //         <span>
// //           Then <span>50,000</span> Open Jobs
// //         </span>
// //       </div>
// //       <div className="keyword">
// //         <span>Trending Jobs Keyword:</span>
// //         <span>Web Designer</span>
// //         <span>Web Developer</span>
// //         <span>IOS Developer</span>
// //         <span>Android Developer</span>
// //       </div>
// //       <div className="search">
// //         <input type="search keyword..." />
// //         <select name="location" id="">
// //           <option value="">Location</option>
// //           <option value="">All Country</option>
// //           <option value="">American</option>
// //           <option value="">Australia</option>
// //           <option value="">Pakistan</option>
// //         </select>
// //         <select name="category" id="">
// //           <option value="">Category</option>
// //           <option value="">Web Designer</option>
// //           <option value="">Web Developer</option>
// //           <option value="">IOS Developer</option>
// //           <option value="">Android Developer</option>
// //         </select>
// //         <button>Search</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;
