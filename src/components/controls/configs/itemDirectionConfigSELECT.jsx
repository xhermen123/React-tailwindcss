import React from "react";
import SelectMenu from "../selectmenu";
import { itemDirectionConfig } from "./itemDirectionConfig";

const SelectItemDirection = ({ itemDirection, onChange, label }) => (
  <SelectMenu onChange={onChange} options={itemDirectionConfig.itemDirection} />
);

export default SelectItemDirection;
