/** Dependencies */
import { createSelector } from "reselect";

const translateStateSelector = (state) => state.get("translate").toJS();

export const translateLoadingSelector = createSelector(
  translateStateSelector,
  (translateState) => translateState?.translateLoading
);

export const translateSuccessSelector = createSelector(
  translateStateSelector,
  (translateState) => translateState?.translateuccess
);

export const translateSelector = createSelector(
  translateStateSelector,
  (translateState) => translateState?.translate
);

export default translateStateSelector;
