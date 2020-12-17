import React from "react";
import SelectMenu from "../selectmenu";
import { colorByConfig } from "./colorByConfig";

const SelectColorBy = ({ colorBy, onChange, label }) => (
  <SelectMenu onChange={onChange} options={colorByConfig.colorBy} />
);

export default SelectColorBy;
