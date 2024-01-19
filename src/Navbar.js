import React, { useEffect } from "react";
import { Link, useMatch, useResolvedPath, useNavigate } from "react-router-dom"

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}

export default function Navbar() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to the "/trending" route when the component mounts
    navigate("/trending");
  }, []);

  return (
    <nav className="navbar">
      <Link to="/trending" className="navbar-title">News</Link>
      <ul>
        <CustomLink to="/trending">Trending</CustomLink>
        <CustomLink to="/ap">AP</CustomLink>
        <CustomLink to="/bbc">BBC</CustomLink>
        <CustomLink to="/cnn">CNN</CustomLink>
        <CustomLink to="/epochtimes">Epoch</CustomLink>
        <CustomLink to="/fox">Fox</CustomLink>
        <CustomLink to="/newsweek">Newsweek</CustomLink>
        {/* <CustomLink to="/washexam">Examiner</CustomLink> */}
        <CustomLink to="/stats">Stats</CustomLink>
      </ul>
    </nav>
  )
}
