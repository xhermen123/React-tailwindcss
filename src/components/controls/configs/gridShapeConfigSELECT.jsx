import React from "react";
import SelectMenu from "../selectmenu";
import { gridShapeConfig } from "./gridShapeConfig";

const SelectGridShape = ({ gridShape, onChange }) => (
  <SelectMenu onChange={onChange} options={gridShapeConfig.gridShape} />
);

export default SelectGridShape;
