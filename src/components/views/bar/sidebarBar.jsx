import React from "react";
import { TabBar, Tab } from "@rmwc/tabs";
import { Icon } from "@rmwc/icon";
import Popover from "react-popover";

import '@rmwc/icon/icon.css';
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/form-field/dist/mdc.form-field.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/radio/dist/mdc.radio.css";
import "@material/select/dist/mdc.select.css";
import "@material/slider/dist/mdc.slider.css";
import "@material/switch/dist/mdc.switch.css";
import "@material/tab-bar/dist/mdc.tab-bar.css";
import "@material/tab/dist/mdc.tab.css";
import "@material/tab-indicator/dist/mdc.tab-indicator.css";
import "@material/tab-scroller/dist/mdc.tab-scroller.css";
import "@material/textfield/dist/mdc.textfield.css";

import { defaultSettingsBar, sliderConfig } from "./defaultSettingsBar";
import { legendConfig } from "../../controls/configs/legendConfig";
import { layoutConfig } from "../../controls/configs/layoutConfig";
import { groupModeConfig } from "../../controls/configs/groupModeConfig";
import { itemDirectionConfig } from "../../controls/configs/itemDirectionConfig";

import SideBarBase from './sidebarBase';
import SideBarStyle from './sidebarStyle';
import SideBarMargin from './sidebarMargin';
import SideBarLabels from './sidebarLabels';
import SideBarGrid from './sidebarGrid';
import SideBarInteractivity from './sidebarInteractivity';
import SideBarLegends from './sidebarLegends';
import SideBarMotion from './sidebarMotion';

const axisLabels = {
  axisTop: "Top",
  axisBottom: "Bottom",
  axisLeft: "Left",
  axisRight: "Right"
};

let switchEnableLabel = defaultSettingsBar.enableLabel;
let switchIsInteractive = defaultSettingsBar.isInteractive;
let switchAnimate = defaultSettingsBar.animate;

export default class SidebarBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      sliderBarMinValue: defaultSettingsBar.minValue,
      sliderBarMaxValue: defaultSettingsBar.maxValue,
      sliderPaddingValue: defaultSettingsBar.padding,
      sliderInnerPadding: defaultSettingsBar.innerPadding,
      sliderBorderRadius: defaultSettingsBar.borderRadius,
      sliderBorderWidth: defaultSettingsBar.borderWidth,
      sliderMarginTop: defaultSettingsBar.margin.top,
      sliderMarginBottom: defaultSettingsBar.margin.bottom,
      sliderMarginLeft: defaultSettingsBar.margin.left,
      sliderMarginRight: defaultSettingsBar.margin.right,
      sliderLabelSkipWidth: defaultSettingsBar.labelSkipWidth,
      sliderLabelSkipHeight: defaultSettingsBar.labelSkipHeight,
      sliderMotionStiffness: defaultSettingsBar.motionStiffness,
      sliderMotionDamping: defaultSettingsBar.motionDamping,
      switchReverse: defaultSettingsBar.reverse,
      switchEnableBarMin: defaultSettingsBar.enableBarMin,
      switchEnableBarMax: defaultSettingsBar.enableBarMax,
      switchEnableLabel: defaultSettingsBar.enableLabel,
      switchEnableGridX: defaultSettingsBar.enableGridX,
      switchEnableGridY: defaultSettingsBar.enableGridY,
      switchIsInteractive: defaultSettingsBar.isInteractive,
      switchAnimate: defaultSettingsBar.animate,
      axisTop: { ...defaultSettingsBar.axisTop },
      axisBottom: { ...defaultSettingsBar.axisBottom },
      axisLeft: { ...defaultSettingsBar.axisLeft },
      axisRight: { ...defaultSettingsBar.axisRight },
      legends: [...defaultSettingsBar.legends],
      isBasePopover: false,
      isStylePopover: false,
      isMarginPopover: false,
      isLabelsPopover: false,
      isGridPopover: false,
      isInteractivityPopover: false,
      isLegendsPopover: false,
      isMotionPopover: false
    };
  }

  updateState = props => {
    this.setState({...props});
  }

  toggle = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  render() {
    let { settings, updateSetting } = this.props;
    let { activeTab } = this.state;
    let legend = settings.legends[0]; // right now we support only 1 legend object

    function colors(specifier) {
      var n = (specifier.length / 6) | 0,
        colors = new Array(n),
        i = 0;
      while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
      return colors;
    }
    function onChangeBorderColor(color) {
      updateSetting({ borderColor: color.hex, isCustom: true });
    }
    function onChangelabelTextColor(color) {
      updateSetting({ labelTextColor: color.hex, isCustom: true });
    }
    function updateLegend(values) {
      updateSetting({
        legends: [
          {
            ...legend,
            ...values
          }
        ]
      });
    }

    return (
      <nav className="sidebar w-12">
        <div className="text-purple-900">
          <div className="flex justify-center items-center py-3 relative">
            <Popover
              isOpen={this.state.isBasePopover}
              preferPlace="right"
              tipSize=".01"
              onOuterAction={() => this.toggle('isBasePopover', false)}
              body={(
                <div className="bg-white shadow-2xl ml-3 mt-16 p-4 w-64" style={{maxHeight: 'calc(100vh - 64px)', overflow: "auto"}}>
                  <SideBarBase
                    settings={settings}
                    sliderConfig={sliderConfig}
                    layoutConfig={layoutConfig}
                    groupModeConfig={groupModeConfig}
                    states={this.state}
                    updateState={this.updateState}
                    updateSetting={updateSetting}
                  />
                </div>
              )}
              children={
                <div
                  className={"cursor-pointer flex justify-center rounded p-1" + (this.state.isBasePopover ? " bg-purple-200" : "")}
                  onClick={() => this.toggle('isBasePopover', true)}
                  children={(
                    <Icon icon="home"/>
                  )}
                />
              }
            />
          </div>
          <div className="flex justify-center items-center py-3 relative">
            <Popover
              isOpen={this.state.isStylePopover}
              preferPlace="right"
              tipSize=".01"
              onOuterAction={() => this.toggle('isStylePopover', false)}
              body={(
                <div className="bg-white shadow-2xl ml-3 mt-16 p-4 w-64" style={{maxHeight: 'calc(100vh - 64px)', overflow: "auto"}}>
                  <SideBarStyle
                    settings={settings}
                    sliderConfig={sliderConfig}
                    states={this.state}
                    updateState={this.updateState}
                    updateSetting={updateSetting}
                    colors={colors}
                    onChangeBorderColor={onChangeBorderColor}
                  />
                </div>
              )}
              children={
                <div
                  className={"cursor-pointer flex justify-center rounded p-1" + (this.state.isStylePopover ? " bg-purple-200" : "")}
                  onClick={() => this.toggle('isStylePopover', true)}
                  children={(
                    <Icon icon="favorite"/>
                  )}
                />
              }
            />
          </div>
          <div className="flex justify-center items-center py-3 relative">
            <Popover
              isOpen={this.state.isMarginPopover}
              preferPlace="right"
              tipSize=".01"
              onOuterAction={() => this.toggle('isMarginPopover', false)}
              body={(
                <div className="bg-white shadow-2xl ml-3 mt-16 p-4 w-64" style={{maxHeight: "calc(100vh - 64px)", overflow: "auto"}}>
                  <SideBarMargin 
                    settings={settings}
                    sliderConfig={sliderConfig}
                    states={this.state}
                    updateState={this.updateState}
                    updateSetting={updateSetting}
                  />
                </div>
              )}
              children={
                <div
                  className={"cursor-pointer flex justify-center rounded p-1" + (this.state.isMarginPopover ? " bg-purple-200" : "")}
                  onClick={() => this.toggle('isMarginPopover', true)}
                  children={(
                    <Icon icon="alarm"/>
                  )}
                />
              }
            />
          </div>
          <div className="flex justify-center items-center py-3 relative">
            <Popover
              isOpen={this.state.isLabelsPopover}
              preferPlace="right"
              tipSize=".01"
              onOuterAction={() => this.toggle('isLabelsPopover', false)}
              body={(
                <div className="bg-white shadow-2xl ml-3 mt-16 p-4 w-64" style={{maxHeight: "calc(100vh - 64px)", overflow: "auto"}}>
                  <SideBarLabels 
                    sliderConfig={sliderConfig}
                    states={this.state}
                    switchEnableLabel={switchEnableLabel}
                    updateState={this.updateState}
                    updateSetting={updateSetting}
                    onChangelabelTextColor={onChangelabelTextColor}
                  />
                </div>
              )}
              children={
                <div
                  className={"cursor-pointer flex justify-center rounded p-1" + (this.state.isLabelsPopover ? " bg-purple-200" : "")}
                  onClick={() => this.toggle('isLabelsPopover', true)}
                  children={(
                    <Icon icon="dashboard"/>
                  )}
                />
              }
            />
          </div>
          <div className="flex justify-center items-center py-3 relative">
            <Popover
              isOpen={this.state.isGridPopover}
              preferPlace="right"
              tipSize=".01"
              onOuterAction={() => this.toggle('isGridPopover', false)}
              body={(
                <div className="bg-white shadow-2xl ml-3 mt-16 p-4 w-64" style={{maxHeight: "calc(100vh - 64px)", overflow: "auto"}}>
                  <SideBarGrid
                    states={this.state}
                    updateState={this.updateState}
                    updateSetting={updateSetting}
                    axisLabels={axisLabels}
                  />
                </div>
               
              )}
              children={
                <div
                  className={"cursor-pointer flex justify-center rounded p-1" + (this.state.isGridPopover ? " bg-purple-200" : "")}
                  onClick={() => this.toggle('isGridPopover', true)}
                  children={(
                    <Icon icon="code"/>
                  )}
                />
              }
            />
          </div>
          <div className="flex justify-center items-center py-3 relative">
            <Popover
              isOpen={this.state.isInteractivityPopover}
              preferPlace="right"
              tipSize=".01"
              onOuterAction={() => this.toggle('isInteractivityPopover', false)}
              body={(
                <div className="bg-white shadow-2xl ml-3 mt-16 p-4 w-64" style={{maxHeight: "calc(100vh - 64px)", overflow: "auto"}}>
                  <SideBarInteractivity
                    states={this.state}
                    switchIsInteractive={switchIsInteractive}
                    updateState={this.updateState}
                    updateSetting={updateSetting}
                  />
                </div>
              )}
              children={
                <div
                  className={"cursor-pointer flex justify-center rounded p-1" + (this.state.isInteractivityPopover ? " bg-purple-200" : "")}
                  onClick={() => this.toggle('isInteractivityPopover', true)}
                  children={(
                    <Icon icon="settings_overscan"/>
                  )}
                />
              }
            />
          </div>
          <div className="flex justify-center items-center py-3 relative">
            <Popover
              isOpen={this.state.isLegendsPopover}
              preferPlace="right"
              tipSize=".01"
              onOuterAction={() => this.toggle('isLegendsPopover', false)}
              body={(
                <div className="bg-white shadow-2xl ml-3 mt-16 p-4 w-64" style={{maxHeight: "calc(100vh - 64px)", overflow: "auto"}}>
                  <SideBarLegends 
                    legend={legend}
                    legendConfig={legendConfig}
                    itemDirectionConfig={itemDirectionConfig}
                    updateLegend={updateLegend}
                  />
                </div>
              )}
              children={
                <div
                  className={"cursor-pointer flex justify-center rounded p-1" + (this.state.isLegendsPopover ? " bg-purple-200" : "")}
                  onClick={() => this.toggle('isLegendsPopover', true)}
                  children={(
                    <Icon icon="tab"/>
                  )}
                />
              }
            />
          </div>
          <div className="flex justify-center items-center py-3 relative">
            <Popover
              isOpen={this.state.isMotionPopover}
              preferPlace="right"
              tipSize=".01"
              onOuterAction={() => this.toggle('isMotionPopover', false)}
              body={(
                <div className="bg-white shadow-2xl ml-3 mt-16 p-4 w-64" style={{maxHeight: "calc(100vh - 64px)", overflow: "auto"}}>
                  <SideBarMotion 
                    states={this.state}
                    switchAnimate={switchAnimate}
                    sliderConfig={sliderConfig}
                    updateSetting={updateSetting}
                    updateState={this.updateState}
                  />
                </div>
              )}
              children={
                <div
                  className={"cursor-pointer flex justify-center rounded p-1" + (this.state.isMotionPopover ? " bg-purple-200" : "")}
                  onClick={() => this.toggle('isMotionPopover', true)}
                  children={(
                    <Icon icon="view_array"/>
                  )}
                />
              }
            />
          </div>
        </div>
      </nav>
    );
  }
}
