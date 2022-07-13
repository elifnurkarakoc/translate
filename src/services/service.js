import axios from "axios";

class Service {
  static fetchData = async (value, selectedKey, translatedKey) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_ENDPOINT}`,
      {
        data: [value, selectedKey, translatedKey],
      }
    );
    return data;
  };
}

export default Service;
