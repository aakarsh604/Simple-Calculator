import {
  ADD_X,
  DECREMENT,
  DIVIDE_X,
  INCREMENT,
  MULTIPLY_X,
  SUBTRACT_X,
} from "./types";

export const increment1 = () => ({ type: INCREMENT });
export const decrement1 = () => ({ type: DECREMENT });
export const addx = (payload) => ({ type: ADD_X, payload });
export const subx = (payload) => ({ type: SUBTRACT_X, payload });
export const mutlix = (payload) => ({ type: MULTIPLY_X, payload });
export const dividex = (payload) => ({ type: DIVIDE_X, payload });
