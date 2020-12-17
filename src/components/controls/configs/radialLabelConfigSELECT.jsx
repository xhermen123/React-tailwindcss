import React from "react";
import SelectMenu from "../selectmenu";
import { radialLabelConfig } from "./radialLabelConfig";

const SelectRadialLabel = ({ radialLabel, onChange }) => (
  <SelectMenu onChange={onChange} options={radialLabelConfig.radialLabel} />
);

export default SelectRadialLabel;
