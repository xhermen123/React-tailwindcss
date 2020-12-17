import React from "react";
import SelectMenu from "../selectmenu";
import { hoverTargetConfig } from "./hoverTargetConfig";

const SelectHoverTarget = ({ hoverTarget, onChange, label }) => (
  <SelectMenu onChange={onChange} options={hoverTargetConfig.hoverTarget} />
);

export default SelectHoverTarget;
