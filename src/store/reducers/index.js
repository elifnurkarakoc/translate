/** Dependencies */
import { combineReducers } from "redux-immutable";

/** Reducer */
import translateReducer from "./translateReducer";

const rootReducer = combineReducers({
  translate: translateReducer,
});

export default rootReducer;
