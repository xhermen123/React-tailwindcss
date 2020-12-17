import React from "react";
import Radio from "../radio";

const RadioGroupMode = ({ defaultMode, groupModes, onChange }) => (
  <div>
    {groupModes.map(mode => (
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

export default RadioGroupMode;
