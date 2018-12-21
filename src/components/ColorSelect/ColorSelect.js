import React from "react";
import PropTypes from "prop-types";

import constants from "../../constants";

import "./ColorSelect.css";

const ColorSelect = ({ open, onChange }) =>
  open && (
    <div className="color-select-container">
      {Object.values(constants.colors).map(item => (
        <div
          className={`color-select-item ${item}`}
          key={item}
          onClick={() => onChange(item)}
        />
      ))}
    </div>
  );

ColorSelect.propTypes = { open: PropTypes.bool, onChange: PropTypes.func };

export default ColorSelect;
