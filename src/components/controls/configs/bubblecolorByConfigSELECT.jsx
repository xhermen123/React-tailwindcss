import React from "react";
import SelectMenu from "../selectmenu";
import { bubblecolorByConfig } from "./bubblecolorByConfig";

const SelectBubbleColorBy = ({ colorBy, onChange, label }) => (
  <SelectMenu onChange={onChange} options={bubblecolorByConfig.colorBy} />
);

export default SelectBubbleColorBy;
