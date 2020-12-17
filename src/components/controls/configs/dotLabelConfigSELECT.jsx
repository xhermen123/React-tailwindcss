import React from "react";
import SelectMenu from "../selectmenu";
import { dotLabelConfig } from "./dotLabelConfig";

const SelectDotLabel = ({ dotLabel, onChange, label }) => (
  <SelectMenu onChange={onChange} options={dotLabelConfig.dotLabel} />
);

export default SelectDotLabel;
