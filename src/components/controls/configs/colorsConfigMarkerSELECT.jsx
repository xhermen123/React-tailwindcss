import React from "react";
import SelectMenu from "../selectmenu";
import { colorsConfig } from "./colorsConfig";

const SelectMarkerColors = ({ colors, onChange, label }) => (
  <SelectMenu onChange={onChange} options={colorsConfig.colors} />
);

export default SelectMarkerColors;
