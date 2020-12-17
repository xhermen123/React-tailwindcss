import React from "react";
import Radio from "../radio";

const RadioAxesTicksPosition = ({
  defaultMode,
  axesTicksPosition,
  onChange
}) => (
  <div>
    {axesTicksPosition.map(mode => (
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

export default RadioAxesTicksPosition;
