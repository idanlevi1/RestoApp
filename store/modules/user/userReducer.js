const LOGIN = 'LOGIN';

const initalState = {
    user: {},
    status: '',
    splashStatus:false,
    authStatus:''
  };

  export default (state = initalState, action) => {
    switch (action.type) {
      case LOGIN:
        return { ...state, authStatus: 'login', user: action.payload };
      default:
        return state;
    }
  };