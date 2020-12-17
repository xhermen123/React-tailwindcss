import React from 'react';
import Switch from "../../../components/controls/switch";

export default class SideBarInteractivity extends React.Component {
  render() {
    const { switchIsInteractive , states, updateState, updateSetting } = this.props;
    return (
      <div>
        <label>Is Interactive</label>
        <br />
        <Switch
          value={states.switchIsInteractive}
          checked={states.switchIsInteractive}
          onChange={evt => {
            updateState({ switchIsInteractive: evt });
            updateSetting({ isInteractive: evt });
          }}
          {...switchIsInteractive}
        />
      </div>
    )
  }
}