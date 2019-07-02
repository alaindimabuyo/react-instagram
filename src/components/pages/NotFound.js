import React, { Fragment } from "react";
import Lost from "../images/Astronaut-big.png";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const NotFound = () => {
  return (
    <Fragment>
      <BouceDiv>
        <div className='container'>
          <div className='row'>
            <div className='col s3' />
            <div className='col s6'>
              <img src={Lost} alt='Page not Found' />
            </div>
          </div>
          <div className='row'>
            <div className='col s1' />
            <div className='col s8 text-center'>
              <h4>This Page is Lost in Space</h4>
              <p>
                You thought this mission to the moon would be a quick six month thing. Your neighbor
                offered to look after your dog. Your high school math teacher was impressed. He once
                said you wouldn’t amount to anything.You sure showed him. But now here you are,
                fifty feet from your spaceship with no way to get back. Your dog will be so sad.
                Your math teacher will be so smug. Pretty devastating.
              </p>
            </div>
          </div>
        </div>
      </BouceDiv>
    </Fragment>
  );
};

const BouceDiv = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;
export default NotFound;
