import React from 'react';
import Slider from "../../../components/controls/slider";
import Switch from "../../../components/controls/switch";

export default class SideBarMotion extends React.Component {
  render() {
    const { states, switchAnimate, sliderConfig, updateSetting, updateState } = this.props;
    return (
      <div>
        <label>Animate</label>
        <br />
        <Switch
          value={states.switchAnimate}
          checked={states.switchAnimate}
          onChange={evt => {
            updateState({ switchAnimate: evt });
            updateSetting({ animate: evt });
          }}
          {...switchAnimate}
        />
        <br />
        <br />
        <label>Motion Stiffness</label>
        <br />
        <Slider
          value={states.sliderMotionStiffness}
          onInput={evt => {
            updateState({ sliderMotionStiffness: evt });
            updateSetting({ motionStiffness: evt });
          }}
          {...sliderConfig.sliderMotionStiffness}
        />
        <br />
        <br />
        <label>Motion Damping</label>
        <br />
        <Slider
          value={states.sliderMotionDamping}
          onInput={evt => {
            updateState({ sliderMotionDamping: evt });
            updateSetting({ motionDamping: evt });
          }}
          {...sliderConfig.sliderMotionDamping}
        />
      </div>
    )
  }
}