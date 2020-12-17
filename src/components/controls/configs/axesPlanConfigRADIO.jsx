import React from "react";
import Radio from "../radio";

const RadioAxesPlan = ({ defaultMode, axesPlan, onChange }) => (
  <div>
    {axesPlan.map(mode => (
      <Radio
        checked={mode.value === defaultMode}
        id={mode.id}
        value={mode.value}
        label={mode.label}
        onChange={onChange}
      />
    ))}
  </div>
);

export default RadioAxesPlan;
