import React from "react";
import SelectMenu from "../selectmenu";
import { sortConfig } from "./sortConfig";

const SelectSort = ({ sort, onChange, label }) => (
  <SelectMenu onChange={onChange} options={sortConfig.sort} />
);

export default SelectSort;
