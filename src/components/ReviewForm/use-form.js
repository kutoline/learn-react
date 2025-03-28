import { useCallback, useReducer } from "react";
import {
  CLEAR_FORM,
  SET_NAME,
  SET_TEXT,
  SET_RATING,
  INITIAL_STATE,
} from "./constants/field-names";

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CLEAR_FORM:
      return { ...state, ...payload };

    case SET_NAME:
      return { ...state, name: payload };
    case SET_TEXT:
      return { ...state, text: payload };
    case SET_RATING:
      return { ...state, rating: payload };

    default:
      return state;
  }
};

export const useForm = (initialState = INITIAL_STATE) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleResetForm = useCallback(() => {
    dispatch({
      type: CLEAR_FORM,
      payload: { name: "", text: "", rating: 0 },
    });
  }, []);

  const handleSetNameValue = useCallback((value) => {
    dispatch({
      type: SET_NAME,
      payload: value,
    });
  }, []);

  const handleSetTextValue = useCallback((value) => {
    dispatch({
      type: SET_TEXT,
      payload: value,
    });
  }, []);

  const handleSetRatingValue = useCallback((value) => {
    dispatch({
      type: SET_RATING,
      payload: value,
    });
  }, []);

  return {
    state,
    dispatch,
    handleResetForm,
    handleSetNameValue,
    handleSetTextValue,
    handleSetRatingValue,
  };
};
