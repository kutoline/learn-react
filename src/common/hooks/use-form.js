import { useReducer } from "react";

const CLEAR_FORM = "CLEAR_FORM";
const UPDATE_FIELD_VALUE = "UPDATE_FIELD_VALUE";
const INITIAL_STATE = {};

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CLEAR_FORM:

      return { ...state, ...payload };

    case UPDATE_FIELD_VALUE:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export const useForm = (initialState = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
