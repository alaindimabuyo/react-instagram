import { GET_COMMENTS, GET_PHOTO, SET_LOADING, GET_SELF } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SELF:
      return {
        ...state,
        self: action.payload,
        loading: false
      };
    case GET_PHOTO:
      return {
        ...state,
        photos: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
