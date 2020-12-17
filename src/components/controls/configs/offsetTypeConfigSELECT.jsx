import React from "react";
import SelectMenu from "../selectmenu";
import { offsetTypeConfig } from "./offsetTypeConfig";

const SelectOffsetType = ({ offsetType, onChange, label }) => (
  <SelectMenu onChange={onChange} options={offsetTypeConfig.offsetType} />
);

export default SelectOffsetType;
