import React from "react";
import { Drawer, DrawerAppContent, DrawerContent } from "@rmwc/drawer";
import "@material/drawer/dist/mdc.drawer.css";

import Bar from "../views/bar/bar";
import SidebarBar from "../views/bar/sidebarBar";
import { defaultSettingsBar } from "../views/bar/defaultSettingsBar";
import { dataBar } from "../views/bar/dataBar";

class Display extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      barSettings: defaultSettingsBar,
      // settings: null,
      type: props.type
    };
  }
  componentWillMount = () => {

    if (this.props.type === "Bar") {
      this.setState({ settings: defaultSettingsBar });
      return;
    } 
  };

  renderSidebar = () => {
    // const props = {
    //   settings: this.state.settings,
    //   updateSetting: this.updateSetting
    // };
    switch (this.state.type) {
      
      case "Bar":
        return (
          <SidebarBar
            settings={this.state.settings}
            updateSetting={this.updateSetting}
          />
        );
      
      default:
        break;
    }
  };

  renderChart = () => {
    let settings = this.prepareNivoSettings();

    switch (this.state.type) {

      case "Bar":
        return <Bar data={dataBar} settings={this.state.settings} />;

      

      default:
        break;
    }
  };

  updateSetting = props => {
    this.setState({ settings: { ...this.state.settings, ...props } });
  };

  componentWillReceiveProps = props => {
    this.setState({ type: props.type });
    if (props.type === "Bar" && props.type !== this.state.type) {
      this.setState({ settings: defaultSettingsBar });
      return;
    } 
  };

  render() {
    return (
      <div className="w-full flex overflow-hidden relative flex-1">
        <div>
          {this.renderSidebar()}
        </div>
        <div className="flex-1">
          {this.renderChart()}
        </div>
        {/* <Drawer dismissible open={this.props.showSidebar}>
          <DrawerContent>{this.renderSidebar()}</DrawerContent>
        </Drawer> */}
        {/* <DrawerAppContent
          style={{
            height: "calc(100vh - 96px)",
            width: "80vw",
            // width: "100%",
            // boxSizing: "border-box",
            flexGrow: 1,
            flexShrink: 1
          }}
        >
          {this.renderChart()}
        </DrawerAppContent> */}
      </div>
    );
  }

  /**
   * Convert custom settings in the state into format that Nivo charts expect
   */
  prepareNivoSettings() {
    let settings = this.state.settings;

    return {
      ...settings,
      // Nivo doesn't use "enabled" flag; instead, if axis is disabled, it should be null
      axisBottom: settings.axisBottom.enabled ? settings.axisBottom : null,
      axisLeft: settings.axisLeft.enabled ? settings.axisLeft : null,
      axisTop: settings.axisTop.enabled ? settings.axisTop : null,
      axisRight: settings.axisRight.enabled ? settings.axisRight : null
    };
  }
}

export default Display;
