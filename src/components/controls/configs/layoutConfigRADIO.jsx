import React from "react";
import Radio from "../radio";

const RadioLayout = ({ defaultMode, layout, onChange }) => (
  <div>
    {layout.map(mode => (
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

export default RadioLayout;
