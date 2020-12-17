import React from "react";
import SelectMenu from "../selectmenu";
import { cellShapeConfig } from "./cellShapeConfig";

const SelectCellShape = ({ cellShape, onChange, label }) => (
  <SelectMenu onChange={onChange} options={cellShapeConfig.cellShape} />
);

export default SelectCellShape;
