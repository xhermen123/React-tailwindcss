import React from "react";
import { Switch as RMWCSwitch } from "@rmwc/switch";

const Switch = ({
  checked,
  children,
  disabled,
  id,
  label,
  onChange,
  rootProps
}) => (
  <RMWCSwitch
    checked={checked}
    children={children}
    disabled={disabled}
    id={id}
    label={label}
    onChange={evt => onChange(evt.target.checked)}
    rootProps={rootProps}
  />
);

export default Switch;
