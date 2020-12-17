import React from "react";
import SelectMenu from "../selectmenu";
import { alignSankeyConfig } from "./alignSankeyConfig";

const SelectAlignSankey = ({ align, onChange, label }) => (
  <SelectMenu onChange={onChange} options={alignSankeyConfig.align} />
);

export default SelectAlignSankey;
