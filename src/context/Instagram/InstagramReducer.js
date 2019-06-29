import { GET_COMMENTS, GET_PHOTO, SET_LOADING, GET_SELF, GET_COUNTS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SELF:
      return {
        ...state,
        self: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_PHOTO:
      return {
        ...state,
        photo: action.payload,
        loading: false
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
