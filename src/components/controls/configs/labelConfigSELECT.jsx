import React from "react";
import SelectMenu from "../selectmenu";
import { labelConfig } from "./labelConfig";

const SelectLabel = ({ label, onChange }) => (
  <SelectMenu onChange={onChange} options={labelConfig.label} />
);

export default SelectLabel;
