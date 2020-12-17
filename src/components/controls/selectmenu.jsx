import React from "react";
import { Select as RMWCSelect } from "@rmwc/select";

const SelectMenu = ({
  className,
  disabled,
  label,
  onChange,
  options,
  outlined,
  placeholder,
  rootProps,
  style,
  value
}) => (
  <RMWCSelect
    className={className}
    disabled={disabled}
    label={label}
    onChange={evt => onChange(evt.target.value)}
    options={options}
    outlined={outlined}
    placeholder={placeholder}
    rootProps={rootProps}
    style={style}
    value={value}
  />
);

export default SelectMenu;
