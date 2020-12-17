import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import NavigationBar from "./components/navbar/navigationBar";

import Display from "./components/library/display";
import "./index.css";
import "./tailwind.output.css";

class App extends Component {
  state = {
    type: "Bar",
    showSidebar: true
  };

  onChange = value => {
    this.setState({
      type: value
    });
  };

  render() {
    return (
      <Router>
        <div className="h-screen flex flex-col">
          <NavigationBar
            onChange={this.onChange}
            toggleSidebar={() =>
              this.setState({
                showSidebar: !this.state.showSidebar
              })
            }
          />
          <Display
            type={this.state.type}
            showSidebar={this.state.showSidebar}
          />
          <Switch />
        </div>
      </Router>
    );
  }
}

export default App;
