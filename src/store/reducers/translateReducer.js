/** Dependencies */
import { fromJS } from "immutable";

/** Store */
import {
  TRANSLATE_LOADING,
  TRANSLATE_FAILURE,
  TRANSLATE_SUCCESS,
} from "store/constants";

const initialState = fromJS({
  translateLoading: true,
  translateSuccess: null,
  translateFailure: null,
  translate: "",
});

export const translateReducer = (state = initialState, action = null) => {
  switch (action?.type) {
    case TRANSLATE_LOADING:
      return state.set("translateLoading", fromJS(action?.isLoading));
    case TRANSLATE_FAILURE:
      return state
        .set("translateFailure", fromJS(action?.error))
        .set("translateLoading", fromJS(false));
    case TRANSLATE_SUCCESS:
      return state
        .set("translateSuccess", fromJS(true))
        .set("translate", fromJS(action?.data[0]))
        .set("translateLoading", fromJS(false));
    default:
      return state;
  }
};

export { initialState };
export default translateReducer;
