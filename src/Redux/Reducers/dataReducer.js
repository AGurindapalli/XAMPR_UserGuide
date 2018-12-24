import * as R from "ramda";
const INITIAL_STATE = {
  name: ""
};

export const dataReducer = (state = INITIAL_STATE, action) =>
  R.cond([[R.T, temp => state]]);
