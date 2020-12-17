import React from "react";
import { GridCell, GridInner } from "@rmwc/grid";
import { IconButton } from "@rmwc/icon-button";

import "@material/select/dist/mdc.select.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";

import SelectChart from "./selectChart";

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <GridInner>
            <GridCell span={1}>
              <IconButton icon="menu" label="Toggle Sidebar" onClick={this.props.toggleSidebar}/>
            </GridCell>
            <GridCell phone={2} tablet={6} desktop={10}/>
            <GridCell span={1}>
              <SelectChart label="View"  onChange={this.props.onChange} />
            </GridCell>
          </GridInner>
        </nav>
      </div>
    );
  }
}
