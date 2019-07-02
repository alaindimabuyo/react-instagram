import React, { useReducer } from "react";
import InstagramContext from "./InstagramContext";
import InstagramReducer from "./InstagramReducer";
import { GET_COMMENTS, GET_PHOTO, SET_LOADING, GET_SELF, GET_CURRENT_PHOTO } from "../types";
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
    const res = await axios.get(`https://api.instagram.com/v1/users/self/?access_token=${igToken}`);

    dispatch({ type: GET_SELF, payload: res.data.data });
  };

  //   //getPhoto
  const getPhoto = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${igToken}`
    );

    dispatch({ type: GET_PHOTO, payload: res.data.data });
  };
  const getCurrentPhoto = async id => {
    setLoading();
    const res = await axios.get(`https://api.instagram.com/v1/media/${id}?access_token=${igToken}`);

    dispatch({ type: GET_CURRENT_PHOTO, payload: res.data.data });
  };

  //get value
  const getValue = (currentKey, into, target) => {
    for (var i in into) {
      if (into.hasOwnProperty(i)) {
        let newKey = i;
        let newVal = into[i];

        if (currentKey.length > 0) {
          newKey = currentKey + "_" + i;
        }
        typeof newVal === "object" ? getValue(newKey, newVal, target) : (target[newKey] = newVal);
      }
    }
  };

  //flatten object
  const flatten = arr => {
    let newObj = {};
    getValue("x", arr, newObj);
    return newObj;
  };

  return (
    <InstagramContext.Provider
      value={{
        self: state.self,
        photos: state.photos,
        photo: state.photo,
        comments: state.comments,
        loading: state.loading,
        getCurrentPhoto,
        getSelf,
        getPhoto,

        flatten,
        getValue
      }}
    >
      {props.children}
    </InstagramContext.Provider>
  );
};

export default InstagramState;
