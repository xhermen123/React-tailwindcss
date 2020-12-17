import React from "react";
import SelectMenu from "../selectmenu";
import { tileConfig } from "./tileConfig";

const SelectTile = ({ tile, onChange, label }) => (
  <SelectMenu onChange={onChange} options={tileConfig.tile} />
);

export default SelectTile;
