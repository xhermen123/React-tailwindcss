import React from "react";
import SelectMenu from "../selectmenu";
import { colorBySwarmConfig } from "./colorBySwarmConfig";

const SelectColorBySwarm = ({ colorBy, onChange, label }) => (
  <SelectMenu onChange={onChange} options={colorBySwarmConfig.colorBy} />
);

export default SelectColorBySwarm;
