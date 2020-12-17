import React from "react";
import SelectMenu from "../selectmenu";
import { pointLabelConfig } from "./pointLabelConfig";

const SelectPointLabel = ({ pointLabel, onChange, label }) => (
  <SelectMenu onChange={onChange} options={pointLabelConfig.pointLabel} />
);

export default SelectPointLabel;
