import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-success'>
      <Link to='/'>
        <i className={icon} />
      </Link>
      <ul>
        <LiWrapper>
          <Link to='/'>Home</Link>
        </LiWrapper>
        <LiWrapper>
          <Link to='/comments'>Comments</Link>
        </LiWrapper>
        <LiWrapper>
          <Link to='/About'>About</Link>
        </LiWrapper>
      </ul>
    </nav>
  );
};
//variables for navbar
Navbar.defaultProps = {
  icon: "fab fa-instagram fa-3x p-2",
  title: "Instagram"
};

const LiWrapper = styled.li`
  a:hover {
    color: orange !important;
  }
`;

export default Navbar;
