import { createStore, combineReducers } from "redux";
import userReducers from "./modules/user/userReducer";
import eventsReducer from "./modules/events/eventsReducer";

const allReducers = combineReducers({
    user: userReducers,
    events: eventsReducer
});

const store = createStore(allReducers);

export default store;
