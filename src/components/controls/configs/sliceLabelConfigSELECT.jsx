import React from "react";
import SelectMenu from "../selectmenu";
import { sliceLabelConfig } from "./sliceLabelConfig";

const SelectSliceLabel = ({ sliceLabel, onChange, label }) => (
  <SelectMenu onChange={onChange} options={sliceLabelConfig.sliceLabel} />
);

export default SelectSliceLabel;
