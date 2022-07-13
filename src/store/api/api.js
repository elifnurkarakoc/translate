/** Services */
import Service from "services/service";

/** Store */
import {
  translateFailure,
  translateLoading,
  translateSuccess,
} from "store/actions";

export const getResult = (value, selectedKey, translatedKey) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(translateLoading(true));

    Service.fetchData(value, selectedKey, translatedKey)
      .then((res) => {
        if (res?.data) {
          dispatch(translateSuccess(res?.data));

          resolve();
        } else {
          dispatch(translateFailure());
          reject();
        }
      })
      .catch(() => {
        reject();
      });
  });
};

export default getResult;
