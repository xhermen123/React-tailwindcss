import React from "react";
import { Checkbox as RMWCCheckbox } from "@rmwc/checkbox";

import "@material/checkbox/dist/mdc.checkbox.css";

const Checkbox = ({
  checked,
  disabled,
  id,
  indeterminate,
  inputRef,
  label,
  onChange,
  ripple,
  rootProps,
  value
}) => (
  <RMWCCheckbox
    checked={checked}
    disabled={disabled}
    id={id}
    indeterminate={indeterminate}
    inputRef={inputRef}
    label={label}
    // onChange={evt => onChange(evt.target.value)}
    ripple={ripple}
    rootProps={rootProps}
    value={value}
  />
);

export default Checkbox;
