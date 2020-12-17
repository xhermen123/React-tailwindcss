import React from 'react';
import SelectColors from "../../controls/configs/colorsConfigSELECT";
import SelectColorBy from "../../controls/configs/colorByConfigSELECT";
import Slider from "../../../components/controls/slider";
import InputColor from "react-input-color";

export default class SideBarStyle extends React.Component {
  render() {
    const { settings, sliderConfig , states, updateState, updateSetting, colors, onChangeBorderColor } = this.props;
    return (
      <div>
        <label>Colors</label>
        <br />

        <SelectColors
          colors={settings.colors}
          onChange={value =>
            updateSetting({ colors: colors(value) })
          }
        />
        <br />
        <br />
        <label>Color by</label>
        <br />
        <SelectColorBy
          colorBy={settings.colorBy}
          onChange={value => updateSetting({ colorBy: value })}
        />
        <br />
        <br />
        <label>Border Radius</label>
        <br />
        <Slider
          value={states.sliderBorderRadius}
          onInput={evt => {
            updateState({ sliderBorderRadius: evt });
            updateSetting({ borderRadius: evt });
          }}
          {...sliderConfig.sliderBorderRadius}
        />
        <br />
        <br />
        <label>Border Width</label>
        <br />
        <Slider
          value={states.sliderBorderWidth}
          onInput={evt => {
            updateState({ sliderBorderWidth: evt });
            updateSetting({ borderWidth: evt });
          }}
          {...sliderConfig.sliderBorderWidth}
        />
        <br />
        <br />
        <label>Border Color</label>
        <br />
        <InputColor
          initialHexColor="#000"
          onChange={onChangeBorderColor}
          placement="right"
        />
      </div>
    )
  }
}