/** Dependencies */
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

/** Store */
import { getResult } from "store/api";
import { translateLoadingSelector, translateSelector } from "store/selectors";

/** Components */
import Translator from "components/Translator/Translator";

/** Utils */
import { debounce } from "utils/helper";

/** Constants */
import { languages } from "constants/constants";

/** Stylesheets */
import "./Content.scss";

const Content = ({ getResult, isLoading, translate }) => {
  const [selectedKey, setSelectedKey] = useState("tr");
  const [translatedKey, setTranslatedKey] = useState("en");
  const [value, setValue] = useState("");

  const [isFill, setIsFill] = useState(false);

  const onClick = (key) => {
    setSelectedKey(key);
    setTranslatedKey(languages?.filter((item) => item.key !== key)[0].key);
    getResult(value, translatedKey, selectedKey);
  };

  const onChange = (e) => {
    const inputValue = e?.target?.value;
    setValue(inputValue);

    if (inputValue?.length > 1) {
      getResult(inputValue, selectedKey, translatedKey);
      setIsFill(true);
      return;
    }
    return setIsFill(false);
  };

  const optimizedOnChange = useCallback(debounce(onChange), []);

  return (
    <div className="contentHolder">
      <div className="translator">
        <Translator
          languageKey={selectedKey}
          onClick={onClick}
          languages={languages}
          isTranslated={false}
          onChange={optimizedOnChange}
        />
      </div>
      <div className="translator">
        <Translator
          languageKey={translatedKey}
          languages={languages}
          isTranslated={true}
          textAreaValue={isFill ? translate : ""}
        />
      </div>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  getResult: (value, selectedKey, translatedKey) =>
    dispatch(getResult(value, selectedKey, translatedKey)),
});

export const mapStateToProps = createStructuredSelector({
  isLoading: translateLoadingSelector,
  translate: translateSelector,
});

Content.propTypes = {
  getResult: PropTypes.func.isRequired,
  translate: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

Content.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
