/** Dependencies */
import React from "react";
import PropTypes from "prop-types";

/** Stylesheets */
import "./Translator.scss";

const Translator = ({
  languages,
  languageKey,
  onClick,
  isTranslated,
  onChange,
  textAreaValue,
}) => {
  return (
    <div className="translatorHolder">
      <div className="languagesNavbar">
        {languages?.map((language) => (
          <div
            key={language?.key}
            className={`language ${
              languageKey === language?.key ? `active` : ""
            }`}
            onClick={() => onClick(language?.key)}
          >
            {language?.value}
          </div>
        ))}
      </div>
      <div className="inputHolder">
        <textarea
          rows="6"
          cols="50"
          disabled={isTranslated}
          onChange={!isTranslated ? onChange : null}
          value={textAreaValue}
        />
      </div>
    </div>
  );
};

Translator.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  languageKey: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isTranslated: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  textAreaValue: PropTypes.string,
};

export default Translator;
