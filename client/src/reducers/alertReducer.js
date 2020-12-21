import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      var ins = false;
      state.forEach((alert) => {
        if (alert.msg === action.payload.msg) {
          ins = true;
        }
      });
      if (ins) {
        return [...state];
      } else {
        return [...state, action.payload];
      }
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};
