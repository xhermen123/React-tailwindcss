import React from "react";
import SelectMenu from "../selectmenu";
import { crosshairTypeConfig } from "./crosshairTypeConfig";

const SelectCrosshairType = ({ crosshairType, onChange, label }) => (
  <SelectMenu onChange={onChange} options={crosshairTypeConfig.crosshairType} />
);

export default SelectCrosshairType;
