import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PhotoItems = ({ photo }) => {
  return (
    <Fragment>
      <div className='containers '>
        <div className='content'>
          <Link to={`/photo/${photo.id}`} className='modal-trigger'>
            <div className='content-overlay' />
            <img src={photo.images.standard_resolution.url} alt='' className='content-image' />
            <IconCarousel>
              {photo.type === "carousel" ? <i className='fas fa-clone' /> : null}
            </IconCarousel>
            <div className='content-details fadeIn-bottom fadeIn-left'>
              <div className='row'>
                <div className='col s-3'>
                  <h6 className='content-title'>
                    <i className='fas fa-heart' /> {photo.likes.count}
                  </h6>
                </div>
                <div className='col s-3 '>
                  <h6 className='content-title'>
                    <i className='fas fa-comment' /> {photo.comments.count}
                  </h6>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

const IconCarousel = styled.h5`
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 20px;
  border: none;
  color: white;
  font-size: 1.4rem;
`;
export default PhotoItems;
