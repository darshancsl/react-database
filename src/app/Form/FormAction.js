import { ADD_DATA } from "./FormConstants";

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data
  };
};