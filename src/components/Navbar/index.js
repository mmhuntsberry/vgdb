import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  navbar,
  display__button,
  filter__container,
  nav__search__container,
  nav__search,
  search__icon,
} from "./navbar.module.css";
import Display from "../../images/eye.svg";
import Search from "../../images/search.svg";
import Options from "../Options";

const Navbar = ({
  search,
  setSearch,
  showModal,
  setShowModal,
  isGridActive,
  setIsGridActive,
}) => {
  useEffect(() => {
    // console.log(search);
  }, []);

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleClick = (evt) => {
    setShowModal(!showModal);
  };

  return (
    <nav className={navbar}>
      <h3>
        <Link to="/">VGDB</Link>
      </h3>
      <div className={nav__search__container}>
        <img className={search__icon} src={Search} alt="" />
        <input
          className={nav__search}
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      <div className={filter__container}>
        <button className={display__button} onClick={handleClick}>
          <img src={Display} alt="" />
        </button>
        {showModal && (
          <Options
            showModal={showModal}
            setShowModal={setShowModal}
            isGridActive={isGridActive}
            setIsGridActive={setIsGridActive}
          />
        )}
      </div>
      {/* <div>
        <button>All</button>
        <button>Favorites</button>
      </div> */}
      {/* <div></div> */}
    </nav>
  );
};

export default Navbar;
