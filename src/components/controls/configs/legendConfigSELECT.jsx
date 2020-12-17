import React from "react";
import SelectMenu from "../selectmenu";
import { legendConfig } from "./legendConfig";

const SelectLegend = ({ value, anchor, onChange, label }) => (
  <SelectMenu value={value} onChange={onChange} options={legendConfig.anchor} />
);

export default SelectLegend;
