import React from "react";
import SelectMenu from "../selectmenu";
import { enableSlicesConfig } from "./enableSlicesConfig";

const SelectEnableSlices = ({ enableSlices, onChange, label }) => (
  <SelectMenu onChange={onChange} options={enableSlicesConfig.enableSlices} />
);

export default SelectEnableSlices;
