import { SIGNUP, LOGIN } from './userActions'

const initalState = {
  user: {},
  status: "",
  splashStatus: false,
  authStatus: ""
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, authStatus: "logedIn", user: action.payload };
    case LOGIN:
      return { ...state, authStatus: "logedIn", user: action.payload };
    default:
      return state;
  }
};
