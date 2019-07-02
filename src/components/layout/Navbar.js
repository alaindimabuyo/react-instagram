import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InstagramContext from "../../context/Instagram/InstagramContext";
const Navbar = ({ icon, title }) => {
  const igContext = useContext(InstagramContext);

  const { clearState } = igContext;
  useEffect(() => {
    clearState();
    // eslint-disable-next-line
  }, []);

  return (
    <nav className='navbar bg-success'>
      <Link to='/'>
        <i onClick={clearState} className={icon} />
      </Link>
      <ul>
        <LiWrapper>
          <Link to='/' onClick={clearState}>
            Home
          </Link>
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
