import React from "react";

const Preloader = () => {
  return (
    <div className='progress red'>
      <div className='indeterminate' />
      <h1>Loading...</h1>
    </div>
  );
};

export default Preloader;
