import React from 'react';
import { groupModeConfig } from "../../controls/configs/groupModeConfig";
import RadioGroupMode from "../../controls/configs/groupModeConfigRADIO";
import RadioLayout from "../../controls/configs/layoutConfigRADIO";
import { layoutConfig } from "../../controls/configs/layoutConfig";
import Slider from "../../../components/controls/slider";
import Switch from "../../../components/controls/switch";

export default class SideBarBase extends React.Component {
  render() {
    const { settings, sliderConfig , states, updateState, updateSetting } = this.props;
    return (
      <div>
        <label>Group Mode</label>
        <br />
        <RadioGroupMode
          groupModes={groupModeConfig.groupModes}
          defaultMode={settings.groupMode}
          onChange={value =>
            updateSetting({ groupMode: value })
          }
        />
        <br />
        <br />
        <label>Layout Mode</label>
        <br />
        <RadioLayout
          layout={layoutConfig.layout}
          defaultMode={settings.layout}
          onChange={value => updateSetting({ layout: value })}
        />
        <br />
        <br />
        <label>Reverse</label>
        <br />
        <Switch
          value={states.switchReverse}
          checked={states.switchReverse}
          onChange={evt => {
            updateState({ switchReverse: evt })
          }}
          {...states.switchReverse}
        />
        <br />
        <br />
        <label>Min Value</label>
        <br />
        <br />
        <Switch
          value={states.switchEnableBarMin}
          checked={states.switchEnableBarMin}
          onChange={evt => {
            updateState({ switchEnableBarMin: evt });
            updateSetting({ enableBarMin: evt });
          }}
          {...states.switchEnableBarMin}
        />
        {settings.enableBarMin ? (
          <Slider
            value={states.sliderBarMinValue}
            onInput={evt => {
              updateState({ sliderBarMinValue: evt });
              updateSetting({ minValue: evt });
            }}
            {...sliderConfig.sliderBarMinValue}
          />
        ) : (
          ""
        )}
        <br />
        <br />
        <label>Max Value</label>
        <br />
        <br />
        <Switch
          value={states.switchEnableBarMax}
          checked={states.switchEnableBarMax}
          onChange={evt => {
            updateState({ switchEnableBarMax: evt });
            updateSetting({ enableBarMax: evt });
          }}
          {...states.switchEnableBarMax}
        />
        {settings.enableBarMax ? (
          <Slider
            value={states.sliderBarMaxValue}
            onInput={evt => {
              updateState({ sliderBarMaxValue: evt });
              updateSetting({ maxValue: evt });
            }}
            {...sliderConfig.sliderBarMaxValue}
          />
        ) : (
          ""
        )}
        <br />
        <br />
        <label>Padding</label>
        <br />
        <Slider
          value={states.sliderPaddingValue}
          onInput={evt => {
            updateState({ sliderPaddingValue: evt });
            updateSetting({ padding: evt });
          }}
          {...sliderConfig.sliderPadding}
        />
        <br />
        <br />
        <label>Inner Padding</label>
        <br />
        <Slider
          value={states.sliderInnerPadding}
          onInput={evt => {
            updateState({ sliderInnerPadding: evt });
            updateSetting({ innerPadding: evt });
          }}
          {...sliderConfig.sliderInnerPadding}
        />
      </div>
    )
  }
}