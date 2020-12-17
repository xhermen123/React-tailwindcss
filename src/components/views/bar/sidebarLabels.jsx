import React from 'react';
import Slider from "../../../components/controls/slider";
import Switch from "../../../components/controls/switch";
import InputColor from "react-input-color";

export default class SideBarLabels extends React.Component {
  render() {
    const { sliderConfig , states, updateState, updateSetting, onChangelabelTextColor, switchEnableLabel } = this.props;
    return (
      <div>
        <label>Enable Labels</label>
        <br />
        <Switch
          value={states.switchEnableLabel}
          checked={states.switchEnableLabel}
          onChange={evt => {
            updateState({ switchEnableLabel: evt });
            updateSetting({ enableLabel: evt });
          }}
          {...switchEnableLabel}
        />
        <br />
        <br />
        <label>Label Skip Width</label>
        <br />
        <Slider
          value={states.sliderLabelSkipWidth}
          onInput={evt => {
            updateState({ sliderLabelSkipWidth: evt });
            updateSetting({ labelSkipWidth: evt });
          }}
          {...sliderConfig.sliderLabelSkipWidth}
        />
        <br />
        <br />
        <label>Label Skip Height</label>
        <br />
        <Slider
          value={states.sliderLabelSkipHeight}
          onInput={evt => {
            updateState({ sliderLabelSkipHeight: evt });
            updateSetting({ labelSkipHeight: evt });
          }}
          {...sliderConfig.sliderLabelSkipHeight}
        />
        <br />
        <br />
        <label>Label Text Color</label>
        <br />
        <InputColor
          initialHexColor="#000"
          onChange={onChangelabelTextColor}
          placement="right"
        />
      </div>
    )
  }
}