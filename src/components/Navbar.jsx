import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/add-course">Add Course</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
