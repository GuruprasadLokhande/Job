import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Post Job", url: "post-job" },
    { name: "Posted Job", url: "posted-job" },
    { name: "Job History", url: "job-history" },
    { name: "Sign Up", url: "signup" },

  ];
  const location = useLocation();

  return (
    <div className="flex gap-5 h-16 items-center text-mine-shaft-300">
      {links.map((link, index) => (
        <div
          key={index}
          className={`border-b-[3px] h-full flex items-center ${
            location.pathname === `/${link.url}` ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"
          }`}
        >
          <Link to={`/${link.url}`}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
