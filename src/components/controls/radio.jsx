import React from "react";
import { Radio as RMWCRadio } from "@rmwc/radio";

const Radio = ({ checked, disabled, id, inputRef, label, ripple, onChange, value }) => (
  <RMWCRadio
    checked={checked}
    disabled={disabled}
    id={id}
    inputRef={inputRef}
    label={label}
    ripple={ripple}
    onChange={evt => onChange(evt.target.value)}
    value={value}
  />
);

export default Radio;
