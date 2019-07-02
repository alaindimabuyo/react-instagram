import React, { Fragment, useContext, useEffect } from "react";
import InstagramContext from "../../context/Instagram/InstagramContext";
import PhotoItem from "../Photos/PhotoItems";
import Preloader from "../layout/Preloader";
import Fade from "react-reveal/Fade";
const Photos = () => {
  const igContext = useContext(InstagramContext);
  const { photos, getPhoto, loading } = igContext;

  useEffect(() => {
    getPhoto();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Preloader />;
  } else {
    return (
      <Fragment>
        <div className='container'>
          <div className='row'>
            <div className='grid-3 text-center'>
              {photos.map(photo => (
                <Fade left>
                  <PhotoItem key={photo.id} photo={photo} />
                </Fade>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default Photos;
