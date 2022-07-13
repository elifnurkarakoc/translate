/** Store */
import {
  TRANSLATE_LOADING,
  TRANSLATE_FAILURE,
  TRANSLATE_SUCCESS,
} from "store/constants";

export const translateLoading = (isLoading) => ({
  type: TRANSLATE_LOADING,
  isLoading,
});

export const translateFailure = (error) => ({
  type: TRANSLATE_FAILURE,
  error,
});

export const translateSuccess = (data) => ({
  type: TRANSLATE_SUCCESS,
  data,
});
