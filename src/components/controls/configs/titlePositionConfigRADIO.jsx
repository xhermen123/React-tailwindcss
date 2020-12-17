import React from "react";
import Radio from "../radio";

const RadioTitlePosition = ({ defaultMode, titlePosition, onChange }) => (
  <div>
    {titlePosition.map(mode => (
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

export default RadioTitlePosition;
