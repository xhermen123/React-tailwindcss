import React from 'react';
import Switch from "../../../components/controls/switch";
import AxisSettingsGroup from "../../controls/configs/axisSettingsGroup";

export default class SideBarGrid extends React.Component {
  render() {
    const { states, updateState, updateSetting, axisLabels } = this.props;
    return (
      <div>
        <label>Enable GridX</label>
        <br />
        <Switch
          value={states.switchEnableGridX}
          checked={states.switchEnableGridX}
          onChange={evt => {
            updateState({ switchEnableGridX: evt });
            updateSetting({ enableGridX: evt });
          }}
        />
        <br />
        <br />
        <label>Enable GridY</label>
        <br />
        <Switch
          value={states.switchEnableGridY}
          checked={states.switchEnableGridY}
          onChange={evt => {
            updateState({ switchEnableGridY: evt });
            updateSetting({ enableGridY: evt });
          }}
        />
        <br />
        <br />

        {["axisTop", "axisBottom", "axisLeft", "axisRight"].map(
          (axisKey, index) => (
            <AxisSettingsGroup
              key={index}
              label={axisLabels[axisKey]}
              settings={states[axisKey]}
              onChange={settings => {
                let newSettings = {
                  ...states[axisKey],
                  ...settings
                };

                updateState({ [axisKey]: newSettings });
                updateSetting({ [axisKey]: newSettings });
              }}
            />
          )
        )}
      </div>
    )
  }
}