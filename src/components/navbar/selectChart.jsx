import React from "react";
import SelectMenu from "../controls/selectmenu";
import { configDisplay } from "./configDisplay";

const SelectChart = ({ label, display, onChange }) => (
  <SelectMenu
    label={label}
    value={display}
    onChange={onChange}
    options={configDisplay.display}
    outlined
  />
);

export default SelectChart;
