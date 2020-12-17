import React from "react";
import SelectMenu from "../selectmenu";
import { areaBlendModeConfig } from "./areaBlendModeConfig";

const SelectAreaBlendMode = ({ areaBlendMode, onChange, label }) => (
  <SelectMenu onChange={onChange} options={areaBlendModeConfig.areaBlendMode} />
);

export default SelectAreaBlendMode;
