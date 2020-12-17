import React from "react";
import SelectMenu from "../selectmenu";
import { alignConfig } from "./calendaralignConfig";

const SelectCalendarAlign = ({ align, onChange, label }) => (
  <SelectMenu onChange={onChange} options={alignConfig.align} />
);

export default SelectCalendarAlign;
