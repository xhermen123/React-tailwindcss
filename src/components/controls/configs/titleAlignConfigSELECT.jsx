import React from "react";
import SelectMenu from "../selectmenu";
import { titleAlignConfig } from "./titleAlignConfig";

const SelectTitleAlign = ({ titleAlign, onChange, label }) => (
  <SelectMenu onChange={onChange} options={titleAlignConfig.titleAlign} />
);

export default SelectTitleAlign;
