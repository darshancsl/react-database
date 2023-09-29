import { combineReducers } from "redux";
import { formReducer } from '../Form/FormReducer';

export const rootReducer = combineReducers({
  addDataReducer: formReducer
});