import { ADD_DATA } from "./FormConstants";

const initialState = {
  data: JSON.parse(localStorage.getItem("data")) || []
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    default:
      return state;
  }
};