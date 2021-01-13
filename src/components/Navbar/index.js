import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { navbar } from "./navbar.module.css";

const Navbar = ({ search, setSearch }) => {
  useEffect(() => {
    // console.log(search);
  }, []);

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };
  return (
    <nav className={navbar}>
      <h3>
        <Link to="/">VGDB</Link>
      </h3>
      <input type="text" onChange={handleChange} />
      {/* <div>
        <button>All</button>
        <button>Favorites</button>
      </div> */}
      {/* <div></div> */}
    </nav>
  );
};

export default Navbar;
