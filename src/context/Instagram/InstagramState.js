import React, { useReducer } from "react";
import InstagramContext from "./InstagramContext";
import InstagramReducer from "./InstagramReducer";
import { GET_COMMENTS, GET_PHOTO, SET_LOADING, GET_SELF, GET_COUNTS } from "../types";
import axios from "axios";

//accessToken
let igToken = "572689804.f6c0c6a.7450f1a2df6441d08642f355e12b1981";
const InstagramState = props => {
  const initialState = {
    photo: {},
    photos: [],
    comments: [],
    loading: false,
    self: {}
  };

  //   //initializeState
  const [state, dispatch] = useReducer(InstagramReducer, initialState);

  //   //set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //   //INSTAGRAM API ENDPOINTS
  //   //get Owner
  const getSelf = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.instagram.com/v1/users/self/?access_token=572689804.f6c0c6a.7450f1a2df6441d08642f355e12b1981`
    );

    dispatch({ type: GET_SELF, payload: res.data.data });
  };

  //   //getPhoto
  const getPhoto = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=572689804.f6c0c6a.7450f1a2df6441d08642f355e12b1981`
    );

    dispatch({ type: GET_PHOTO, payload: res.data });
  };

  //   //get Comments
  const getComments = async mediaId => {
    setLoading();
    const res = await axios.get(
      `https://api.instagram.com/v1/media/${mediaId}/comments?access_token=${igToken}`
    );

    dispatch({ type: GET_COMMENTS, payload: res.data });
  };

  return (
    <InstagramContext.Provider
      value={{
        self: state.self,
        photos: state.photos,
        photo: state.photo,
        comments: state.comments,
        loading: state.loading,
        getSelf,
        getPhoto,
        getComments
      }}
    >
      {props.children}
    </InstagramContext.Provider>
  );
};

export default InstagramState;
