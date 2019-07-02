import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import InstagramContext from "../../context/Instagram/InstagramContext";
import styled from "styled-components";
import SlideImages from "../layout/Carousel";

const CurrentPhoto = ({ match }) => {
  const igContext = useContext(InstagramContext);

  const { photo, getCurrentPhoto, flatten } = igContext;
  useEffect(() => {
    getCurrentPhoto(match.params.id);
    // eslint-disable-next-line
  }, []);

  let image = flatten(photo.images);
  let user = flatten(photo.user);
  let caption = flatten(photo.caption);
  let carousel = flatten(photo.carousel_media);
  let location = flatten(photo.location);
  console.log(<location />);

  return (
    <Padding>
      <Fragment>
        <div className='container'>
          <div className='row'>
            {photo.caption !== null ? (
              <Fragment>
                <div className='col s1'>
                  <p />
                </div>
                <div className='col s1'>
                  <Link to='/'>
                    <SmallImageWrap src={user.x_profile_picture} alt='profile_photo' />
                  </Link>
                </div>
                <div className='col s10'>
                  <Link to='/'>
                    <strong>{user.x_username}</strong>
                  </Link>
                  <Caption>{caption.x_text}</Caption>
                </div>
              </Fragment>
            ) : (
              <div className='row'>
                <div className='col s1'>
                  <p />
                </div>
                <div className='col s1'>
                  <Link to='/'>
                    <SmallImageWrap src={user.x_profile_picture} alt='profile_photo' />
                  </Link>
                </div>
                <div className='col s10'>
                  <Link to='/'>
                    <strong>{user.x_username}</strong>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className='row'>
            <div className='col s3' />
            <div className='col s5 '>
              {location !== null ? (
                <strong className='badge-primary right badge'>{location.x_name}</strong>
              ) : (
                <strong className='badge-primary right badge' />
              )}

              {photo.type === "carousel" ? (
                <SlideImages carousel={carousel} />
              ) : (
                <ImageWrap src={image.x_standard_resolution_url} alt='current_photo' />
              )}
            </div>
            <div className='col-s2' />
          </div>
        </div>
      </Fragment>
    </Padding>
  );
};

const SmallImageWrap = styled.img`
  border-radius: 100%;
  width: 100%;
  height: auto;
`;

const Caption = styled.p`
  text-align: justify;
  text-justify: inter-word;
`;

const Padding = styled.div`
  padding: 30px 20px 30px 20px;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const ImageWrap = styled.img`
  width: 10%,
  height: auto;
`;

export default CurrentPhoto;
