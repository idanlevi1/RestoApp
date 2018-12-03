import { createStore, applyMiddleware, compose } from "redux";
import userReducers from "./modules/user/userReducer";
import thunk from "redux-thunk";

const store = createStore(
    userReducers,
    compose(applyMiddleware(thunk))
);

export default store;
