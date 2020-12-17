import React from "react";
import SelectMenu from "../selectmenu";
import { alignConfig } from "./alignConfig";

const SelectAlign = ({ align, onChange, label }) => (
  <SelectMenu onChange={onChange} options={alignConfig.align} />
);

export default SelectAlign;
