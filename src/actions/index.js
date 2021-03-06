import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
import streamsDB from "../apis";
import history from "../history";

export const onSignIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const onSignOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await streamsDB.post("/streams",  { ...formValues, userId});
    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push("/")
  };
};

export const fetchStreams = () => async dispatch => {
  const response = await streamsDB.get("/streams")
  dispatch({ type: FETCH_STREAMS, payload: response.data });
}

export const fetchStream = id => async (dispatch) => {
  const response = await streamsDB.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streamsDB.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push("/")
};

export const deleteStream = (id) => async (dispatch) => {
  await streamsDB.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};


