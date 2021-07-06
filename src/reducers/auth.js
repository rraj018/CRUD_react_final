import {SIGN_IN, SIGN_OUT} from "../actions/types"

const AUTH_STATUS = {
  isSignedIn: null,
  userId: null
};

const Auth = (state = AUTH_STATUS, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default Auth
