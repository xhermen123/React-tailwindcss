import React from "react";

import {
  sliderLegendOffset,
  sliderTickPadding,
  sliderTickRotation,
  sliderTickSize
} from "./axisSlidersConfig";
import Switch from "../switch";
import Slider from "../slider";
import TextField from "../textfield";

const AxisSettingsGroup = ({ label, settings, onChange }) => (
  <React.Fragment>
    <label>Enable Axis {label}</label>
    <br />
    <br />
    <Switch
      value={settings.enabled}
      checked={settings.enabled}
      onChange={enabled => onChange({ enabled })}
    />
    <br />
    <br />

    {settings.enabled && (
      <React.Fragment>
        <label>Tick Size</label>
        <Slider
          value={settings.tickSize}
          onInput={tickSize => onChange({ tickSize })}
          {...sliderTickSize}
        />

        <label>Tick Padding</label>
        <Slider
          value={settings.tickPadding}
          onInput={tickPadding => onChange({ tickPadding })}
          {...sliderTickPadding}
        />

        <label>Tick Rotation</label>
        <Slider
          value={settings.tickRotation}
          onInput={tickRotation => onChange({ tickRotation })}
          {...sliderTickRotation}
        />

        <label>Legend</label>
        <TextField
          value={settings.legend}
          onChange={legend => onChange({ legend })}
        />

        <br />
        <br />
        <label>Legend Offset</label>
        <Slider
          value={settings.legendOffset}
          onInput={legendOffset => onChange({ legendOffset })}
          {...sliderLegendOffset}
        />
      </React.Fragment>
    )}
  </React.Fragment>
);

export default AxisSettingsGroup;
