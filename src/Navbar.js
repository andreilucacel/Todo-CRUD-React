import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Lucacel's TODO List</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">NewTODO</Link>
      </div>
    </nav>
  );
};

export default Navbar;
