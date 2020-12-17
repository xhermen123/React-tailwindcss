import React from "react";
import SelectMenu from "../selectmenu";
import { labelPositionConfig } from "./labelPositionConfig";

const SelectLabelPosition = ({ labelPosition, onChange, label }) => (
  <SelectMenu onChange={onChange} options={labelPositionConfig.labelPosition} />
);

export default SelectLabelPosition;
