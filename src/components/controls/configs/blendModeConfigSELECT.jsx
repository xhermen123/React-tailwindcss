import React from "react";
import SelectMenu from "../selectmenu";
import { blendModeConfig } from "./blendModeConfig";

const SelectblendMode = ({ blendMode, onChange, label }) => (
  <SelectMenu onChange={onChange} options={blendModeConfig.blendMode} />
);

export default SelectblendMode;
