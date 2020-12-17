import React from "react";
import SelectMenu from "../selectmenu";
import { fillDirectionConfig } from "./fillDirectionConfig";

const SelectFillDirection = ({ fillDirection, onChange, label }) => (
  <SelectMenu onChange={onChange} options={fillDirectionConfig.fillDirection} />
);

export default SelectFillDirection;
