import React, { useContext, Fragment, useEffect } from "react";
import InstagramContext from "../../context/Instagram/InstagramContext";
import styled from "styled-components";

const InstagramOwner = () => {
  const igContext = useContext(InstagramContext);
  const { getSelf, self } = igContext;

  useEffect(() => {
    getSelf();
    // eslint-disable-next-line
  }, []);

  const { username, full_name, profile_picture } = self;
  //get the nested value inside the counts object
  const { counts = {} } = self;

  return (
    <Fragment>
      <Padding>
        <div className='container'>
          <div className='row'>
            <div className='col s2'>
              <ImgContainer className='imgContainer'>
                <ProfileImgWrapper src={profile_picture} alt='profile-picture' />
                <Overlay className='overlay'>
                  <Text>{username}</Text>
                </Overlay>
              </ImgContainer>
            </div>

            <div className='col s8'>
              <Padding>
                <h5>{full_name}</h5>
                <p>https://www.behance.net/alaindimabuyo</p>
              </Padding>
            </div>
          </div>
          <div className='row'>
            <div className='col s4 badge-primary'>
              <h6>Posts: {counts.media}</h6>
            </div>
            <div className='col s4 badge-danger'>
              <h6>Followers: {counts.followed_by}</h6>
            </div>
            <div className='col s4 badge-dark'>
              <h6>Following: {counts.follows}</h6>
            </div>
          </div>
        </div>
      </Padding>
    </Fragment>
  );
};

const ProfileImgWrapper = styled.img`
border-radius: 50%
width: 100%
height: auto
display:block
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  &:hover .overlay {
    opacity: 1;
    border-radius: 50%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: rgb(171, 71, 188);
`;

const Text = styled.div`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Padding = styled.div`
  padding: 30px 20px 30px 20px;
`;

export default InstagramOwner;
