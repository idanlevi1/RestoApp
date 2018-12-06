import { SET_EVENTS } from './eventsActions'

const initalState = {
  events: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};
