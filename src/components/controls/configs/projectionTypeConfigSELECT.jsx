import React from "react";
import SelectMenu from "../selectmenu";
import { projectionTypeConfig } from "./projectionTypeConfig";

const SelectProjectionType = ({ projectionType, onChange, label }) => (
  <SelectMenu
    onChange={onChange}
    options={projectionTypeConfig.projectionType}
  />
);

export default SelectProjectionType;
