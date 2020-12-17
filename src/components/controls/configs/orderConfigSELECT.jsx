import React from "react";
import SelectMenu from "../selectmenu";
import { orderConfig } from "./orderConfig";

const SelectOrder = ({ order, onChange, label }) => (
  <SelectMenu onChange={onChange} options={orderConfig.order} />
);

export default SelectOrder;
