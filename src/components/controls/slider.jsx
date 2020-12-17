import React from "react";
import { Slider as RMWCSlider } from "@rmwc/slider";

const Slider = ({
  disabled,
  discrete,
  displayMarkers,
  max,
  min,
  onChange,
  onInput,
  step,
  value
}) => (
  <RMWCSlider
    disabled={disabled}
    discrete={discrete}
    displayMarkers={displayMarkers}
    max={max}
    min={min}
    // onChange={evt => this.setState({ sliderValue2: evt.detail.value })}
    onInput={evt => onInput(evt.target.value)}
    step={step}
    value={value}
  />
);

export default Slider;
