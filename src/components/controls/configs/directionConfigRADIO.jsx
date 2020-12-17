import React from "react";
import Radio from "../radio";
import { directionConfig } from "./directionConfig";

const RadioDirection = ({ defaultMode, direction, onChange }) => (
  <div>
    {direction.map(mode => (
      <Radio
        checked={mode.value === defaultMode}
        id={mode.id}
        value={mode.value}
        label={mode.label}
        onChange={onChange}
        options={directionConfig.direction}
      />
    ))}
  </div>
);

export default RadioDirection;
