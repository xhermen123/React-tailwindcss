import React from "react";
import Radio from "../radio";

const RadioAxisPosition = ({ defaultMode, axisPosition, onChange }) => (
  <div>
    {axisPosition.map(mode => (
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

export default RadioAxisPosition;
