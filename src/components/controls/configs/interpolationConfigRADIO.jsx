import React from "react";
import Radio from "../radio";



const RadioInterpolation = ({ defaultMode, interpolation, onChange }) => (
  <div>
    {interpolation.map(mode => (
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

export default RadioInterpolation;
