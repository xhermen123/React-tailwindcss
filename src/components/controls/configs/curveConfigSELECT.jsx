import React from "react";
import SelectMenu from "../selectmenu";
import { curveConfig } from "./curveConfig";

const SelectCurve = ({ curve, onChange, label }) => (
  <SelectMenu onChange={onChange} options={curveConfig.curve} />
);

export default SelectCurve;
