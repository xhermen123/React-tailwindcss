import React from 'react';
import Slider from "../../../components/controls/slider";

export default class SideBarMargin extends React.Component {
  render() {
    const { settings, sliderConfig , states, updateState, updateSetting } = this.props;
    return (
      <div>
        <label>Margin: Top</label>
        <Slider
          value={states.sliderMarginTop}
          onInput={evt => {
            updateState({ sliderMarginTop: evt });
            updateSetting({
              margin: { ...settings.margin, top: evt }
            });
          }}
          {...sliderConfig.sliderMarginTop}
        />
        <label>Margin: Bottom</label>
        <Slider
          value={states.sliderMarginBottom}
          onInput={evt => {
            updateState({ sliderMarginBottom: evt });
            updateSetting({
              margin: { ...settings.margin, bottom: evt }
            });
          }}
          {...sliderConfig.sliderMarginBottom}
        />
        <label>Margin: Left</label>
        <Slider
          value={states.sliderMarginLeft}
          onInput={evt => {
            updateState({ sliderMarginLeft: evt });
            updateSetting({
              margin: { ...settings.margin, left: evt }
            });
          }}
          {...sliderConfig.sliderMarginLeft}
        />
        <label>Margin: Right</label>
        <Slider
          value={states.sliderMarginRight}
          onInput={evt => {
            updateState({ sliderMarginRight: evt });
            updateSetting({
              margin: { ...settings.margin, right: evt }
            });
          }}
          {...sliderConfig.sliderMarginRight}
        />
      </div>
    )
  }
}