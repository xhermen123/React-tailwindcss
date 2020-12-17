import React from "react";
import SelectMenu from "../controls/selectmenu";
import { configDataSource } from "./configDataSource";

const SelectDataSource = ({ label, dataSource, onChange }) => (
  <SelectMenu
    label={label}
    value={dataSource}
    onChange={onChange}
    options={configDataSource.dataSource}
  />
);

export default SelectDataSource;
