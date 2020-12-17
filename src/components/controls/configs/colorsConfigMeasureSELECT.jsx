import React from "react";
import SelectMenu from "../selectmenu";
import { colorsConfig } from "./colorsConfig";

const SelectMeasureColors = ({ colors, onChange, label }) => (
  <SelectMenu onChange={onChange} options={colorsConfig.colors} />
);

export default SelectMeasureColors;
