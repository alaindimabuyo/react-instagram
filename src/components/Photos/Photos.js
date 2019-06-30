import React, { Fragment, useContext, useEffect } from "react";
import InstagramContext from "../../context/Instagram/InstagramContext";
import PhotoItem from "../Photos/PhotoItems";

const Photos = () => {
  const igContext = useContext(InstagramContext);
  const { photos, getPhoto } = igContext;

  useEffect(() => {
    getPhoto();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          <div className='grid-3 text-center'>
            {photos.map(photo => (
              <PhotoItem key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Photos;
