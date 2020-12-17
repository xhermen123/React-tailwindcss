import React from "react";
import Radio from "../radio";

const RadioLegendDirection = ({ defaultMode, directions, onChange }) => (
  <div>
    {directions.map(mode => (
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

export default RadioLegendDirection;
