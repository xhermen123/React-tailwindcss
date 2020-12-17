import React from "react";
import { ResponsiveBar } from "@nivo/bar";
const Bar = ({ data, settings }) => <ResponsiveBar data={data} {...settings} />;

export default Bar;
