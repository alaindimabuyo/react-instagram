import React, { Fragment } from "react";
import InstagramOwner from "../owner/InstagramOwner";
import InstagramPhotos from "../Photos/Photos";

const Home = () => {
  return (
    <Fragment>
      <InstagramOwner />
      <InstagramPhotos />
    </Fragment>
  );
};

export default Home;
