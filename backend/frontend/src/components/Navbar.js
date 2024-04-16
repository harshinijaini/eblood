import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src="/images/eBLOOD.jpeg" className="logo"></img>
        </Link>
        <nav>
          {user && (
            <div>
              <Link to="/home">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/checkList">CheckList</Link>
              <Link to="/siteDescription">SiteDescription</Link> |
              <span style={{ color: "red" }}> Welcome, {user.email}</span>
              <Link to="/">Profile</Link>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/home">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/checkList">CheckList</Link>
              <Link to="/siteDescription">SiteDescription</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
