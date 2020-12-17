import React from "react";
import Radio from "../radio";

const RadioYearLegendPosition = ({
  defaultMode,
  yearLegendPosition,
  onChange
}) => (
  <div>
    {yearLegendPosition.map(mode => (
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

export default RadioYearLegendPosition;
