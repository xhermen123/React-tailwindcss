import React from "react";
import Radio from "../radio";
import { legendConfig } from "./legendConfig";

const RadioLegend = ({ defaultMode, legend, onChange }) => (
  <div>
    {legend.map(mode => (
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

export default RadioLegend;
