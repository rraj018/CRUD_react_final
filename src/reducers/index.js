import { combineReducers } from "redux";
import {reducer} from "redux-form"
import Auth from "./auth"
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: Auth,
  form: reducer,
  stream: streamReducer
});
