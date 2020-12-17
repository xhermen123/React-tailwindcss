import React from "react";
import SelectMenu from "../selectmenu";
import { labelTreeMapConfig } from "./labelTreeMapConfig";

const SelectLabelTreeMap = ({ label, onChange }) => (
  <SelectMenu onChange={onChange} options={labelTreeMapConfig.label} />
);

export default SelectLabelTreeMap;
