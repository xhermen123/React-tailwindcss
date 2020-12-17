import React from "react";
import Radio from "../radio";

const RadioMonthLegendPosition = ({
  defaultMode,
  monthLegendPosition,
  onChange
}) => (
  <div>
    {monthLegendPosition.map(mode => (
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

export default RadioMonthLegendPosition;
