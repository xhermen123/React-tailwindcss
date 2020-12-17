//****  ****  ****  ****
//BAR
//****  ****  ****  ****
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { generateCountriesData, sets } from "@nivo/generators";
import range from "lodash/range";
import random from "lodash/random";
import { Bar } from "../src";

//set the legends classifications
const keys = ["hot dogs", "burgers", "sandwich", "kebab", "fries", "donut"];

//set the common layout variables
const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  data: generateCountriesData(keys, { size: 7 }),
  indexBy: "country",
  keys,
  padding: 0.2,
  labelTextColor: "inherit:darker(1.4)",
  labelSkipWidth: 16,
  labelSkipHeight: 16
};

//append map values to the storiesOf function
const stories = storiesOf("Bar", module);

//story
stories.add("stacked", () => <Bar {...commonProps} />);

//story
stories.add("stacked horizontal", () => (
  <Bar
    {...commonProps}
    layout="horizontal"
    enableGridY={false}
    enableGridX={true}
  />
));

//story
stories.add("grouped", () => <Bar {...commonProps} groupMode="grouped" />);

//story
stories.add("grouped horizontal", () => (
  <Bar
    {...commonProps}
    groupMode="grouped"
    layout="horizontal"
    enableGridY={false}
    enableGridX={true}
  />
));

//story
stories.add("with marker", () => (
  <Bar
    {...commonProps}
    padding={0.4}
    markers={[
      {
        axis: "y",
        value: 300,
        lineStyle: { stroke: "rgba(0, 0, 0, .35)", strokeWidth: 2 },
        legend: "y marker at 300",
        legendOrientation: "vertical"
      }
    ]}
  />
));

//story
stories.add("using custom color", () => (
  <Bar {...commonProps} colors={({ id, data }) => data[`${id}Color`]} />
));

//set additional variables for the next story
const divergingData = range(9).map(i => {
  let gain = random(0, 100);
  let loss = 100 - gain;
  const highGain = random(Math.round(gain * 0.4));
  const highLoss = random(Math.round(loss * 0.4));
  gain = gain - highGain;
  loss = loss - highLoss;

  return {
    "gained > 100$": highGain,
    "gained <= 100$": gain,
    "lost <= 100$": -loss,
    "lost > 100$": -highLoss,
    user: sets.names[i]
  };
});

const divergingCommonProps = {
  ...commonProps,
  data: divergingData,
  indexBy: "user",
  minValue: -100,
  maxValue: 100,
  enableGridX: true,
  enableGridY: false,
  label: d => Math.abs(d.value),
  labelTextColor: "inherit:darker(1.2)",
  axisTop: {
    tickSize: 0,
    tickPadding: 12
  },
  axisBottom: {
    legend: "USERS",
    legendPosition: "middle",
    legendOffset: 50,
    tickSize: 0,
    tickPadding: 12
  },
  axisLeft: null,
  axisRight: {
    format: v => `${Math.abs(v)}%`
  },
  markers: [
    {
      axis: "y",
      value: 0,
      lineStyle: { strokeOpacity: 0 },
      textStyle: { fill: "#2ebca6" },
      legend: "gain",
      legendPosition: "top-left",
      legendOrientation: "vertical",
      legendOffsetY: 120
    },
    {
      axis: "y",
      value: 0,
      lineStyle: { stroke: "#f47560", strokeWidth: 1 },
      textStyle: { fill: "#e25c3b" },
      legend: "loss",
      legendPosition: "bottom-left",
      legendOrientation: "vertical",
      legendOffsetY: 120
    }
  ]
};

//story for the prior two variables
stories.add("diverging stacked", () => (
  <Bar
    {...divergingCommonProps}
    keys={["gained <= 100$", "gained > 100$", "lost <= 100$", "lost > 100$"]}
    padding={0.4}
    colors={["#97e3d5", "#61cdbb", "#f47560", "#e25c3b"]}
    labelFormat={v => `${v}%`}
  />
));

stories.add("diverging grouped", () => (
  <Bar
    {...divergingCommonProps}
    keys={["gained > 100$", "gained <= 100$", "lost <= 100$", "lost > 100$"]}
    groupMode="grouped"
    padding={0.1}
    colors={["#61cdbb", "#97e3d5", "#f47560", "#e25c3b"]}
    innerPadding={1}
  />
));

//set additional variable for the next story
const CustomBarComponent = ({ x, y, width, height, color }) => (
  <circle
    cx={x + width / 2}
    cy={y + height / 2}
    r={Math.min(width, height) / 2}
    fill={color}
  />
);

//story for the prior variable
stories.add("custom bar item", () => (
  <Bar
    {...commonProps}
    innerPadding={4}
    barComponent={CustomBarComponent}
    labelTextColor="inherit:darker(1)"
  />
));

//story
stories.add("with formatted values", () => (
  <Bar
    {...commonProps}
    axisLeft={{
      format: value =>
        `${Number(value).toLocaleString("ru-RU", {
          minimumFractionDigits: 2
        })} ₽`
    }}
    tooltipFormat={value =>
      `${Number(value).toLocaleString("ru-RU", {
        minimumFractionDigits: 2
      })} ₽`
    }
  />
));

//story
stories.add("custom tooltip", () => (
  <Bar
    {...commonProps}
    axisLeft={{
      format: value =>
        Number(value).toLocaleString("ru-RU", {
          minimumFractionDigits: 2
        })
    }}
    tooltip={({ id, value, color }) => (
      <strong style={{ color }}>
        {id}: {value}
      </strong>
    )}
    theme={{
      tooltip: {
        container: {
          background: "#333"
        }
      }
    }}
  />
));

//story
stories.add(
  "custom axis ticks",
  () => (
    <Bar
      {...commonProps}
      axisLeft={null}
      axisBottom={{
        renderTick: tick => (
          <g key={tick.key} transform={`translate(${tick.x},${tick.y + 22})`}>
            <rect
              x={-14}
              y={-6}
              rx={3}
              ry={3}
              width={28}
              height={24}
              fill="rgba(0, 0, 0, .05)"
            />
            <rect
              x={-12}
              y={-12}
              rx={2}
              ry={2}
              width={24}
              height={24}
              fill="rgb(232, 193, 160)"
            />
            <line
              stroke="rgb(232, 193, 160)"
              strokeWidth={1.5}
              y1={-22}
              y2={-12}
            />
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                ...tick.theme.axis.ticks.text,
                fill: "#333",
                fontSize: 10
              }}
            >
              {tick.value}
            </text>
          </g>
        )
      }}
    />
  ),
  {
    info: {
      text:
        "You can customize rendering of axis ticks using the corresponding axis `renderTick` property."
    }
  }
);

//story
stories.add("enter/leave (check actions)", () => (
  <Bar
    {...commonProps}
    onMouseEnter={action("onMouseEnter")}
    onMouseLeave={action("onMouseLeave")}
  />
));

//****  ****  ****  ****
//BAR: RACE CHART
//****  ****  ****  ****
/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { useState, useEffect } from "react";
import { storiesOf } from "@storybook/react";
import { Bar } from "../src";

const stories = storiesOf("Bar/race chart", module);

const DataGenerator = (initialIndex, initialState) => {
  let index = initialIndex;
  let state = initialState;

  return {
    increment: () => {
      index++;
      state = state.map(item => {
        const initialValue = initialState.find(d => d.id === item.id).value;

        return {
          ...item,
          value: Math.round(item.value + Math.random() * (initialValue * 0.2))
        };
      });
    },
    getData: () => {
      return { index, state };
    }
  };
};

const BarComponent = props => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <rect
        x={-3}
        y={7}
        width={props.width}
        height={props.height}
        fill="rgba(0, 0, 0, .07)"
      />
      <rect width={props.width} height={props.height} fill={props.color} />
      <rect
        x={props.width - 5}
        width={5}
        height={props.height}
        fill={props.borderColor}
        fillOpacity={0.2}
      />
      <text
        x={props.width - 16}
        y={props.height / 2 - 8}
        textAnchor="end"
        dominantBaseline="central"
        fill="black"
        style={{
          fontWeight: 900,
          fontSize: 15
        }}
      >
        {props.data.indexValue}
      </text>
      <text
        x={props.width - 16}
        y={props.height / 2 + 10}
        textAnchor="end"
        dominantBaseline="central"
        fill={props.borderColor}
        style={{
          fontWeight: 400,
          fontSize: 13
        }}
      >
        {props.data.value}
      </text>
    </g>
  );
};

const dataGenerator = DataGenerator(1900, [
  { id: "Tokyo", value: 10000000 },
  { id: "Osaka", value: 9000000 },
  { id: "Nara", value: 8000000 },
  { id: "Kyoto", value: 7000000 },
  { id: "Kobe", value: 5000000 },
  { id: "Sapporo", value: 3000000 }
]);

const Sample = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      dataGenerator.increment();
      setCurrent(current + 1);
    }, 1400);
    return () => clearTimeout(timer);
  }, [current, setCurrent]);

  const yearData = dataGenerator.getData();
  const barData = [...yearData.state].sort((a, b) => a.value - b.value);

  return (
    <>
      <h2 style={{ marginLeft: 60, fontWeight: 400, color: "#555" }}>
        Arbitrary Value in Japan Cities{" "}
        <strong style={{ color: "black", fontWeight: 900 }}>
          {yearData.index}
        </strong>
      </h2>
      <Bar
        width={800}
        height={500}
        layout="horizontal"
        margin={{ top: 26, right: 120, bottom: 26, left: 60 }}
        data={barData}
        indexBy="id"
        keys={["value"]}
        colors={{ scheme: "spectral" }}
        colorBy="indexValue"
        borderColor={{ from: "color", modifiers: [["darker", 2.6]] }}
        enableGridX
        enableGridY={false}
        axisTop={{
          format: "~s"
        }}
        axisBottom={{
          format: "~s"
        }}
        axisLeft={null}
        padding={0.3}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.4]] }}
        isInteractive={false}
        barComponent={BarComponent}
        motionStiffness={170}
        motionDamping={26}
      />
    </>
  );
};

stories.add("demo", () => <Sample />);

//****  ****  ****  ****
//BULLET
//****  ****  ****  ****

import React from "react";
import { storiesOf } from "@storybook/react";
import { generateBulletData } from "@nivo/generators";
import { Bullet } from "../src";

//data set
const data = [
  generateBulletData("volume", 200, { measureCount: 2 }),
  generateBulletData("cost", 10000, { markerCount: 2 }),
  generateBulletData("revenue", 2, { float: true })
];

//common layout props
const commonProps = {
  width: 900,
  height: 360,
  margin: { top: 10, right: 30, bottom: 50, left: 110 },
  titleOffsetX: -80,
  data,
  spacing: 80,
  animate: false
};

//append to stories .map
const stories = storiesOf("Bullet", module);

//story
stories.add("default", () => <Bullet {...commonProps} />);

//story
stories.add("vertical", () => (
  <Bullet
    {...commonProps}
    layout="vertical"
    height={500}
    spacing={240}
    margin={{ ...commonProps.margin, top: 70 }}
    titleAlign="start"
    titleOffsetX={0}
    titleOffsetY={-15}
    titleRotation={-90}
  />
));

//variable for next story
const CustomRange = ({
  x,
  y,
  width,
  height,
  color,
  onMouseEnter,
  onMouseMove,
  onMouseLeave
}) => (
  <rect
    x={x + 2}
    y={y + 2}
    rx={5}
    ry={5}
    width={width - 4}
    height={height - 4}
    fill={color}
    onMouseEnter={onMouseEnter}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
  />
);

//story for the prior variable
stories.add(
  "custom range",
  () => <Bullet {...commonProps} rangeComponent={CustomRange} />,
  {
    info: {
      text: `You can customize ranges using the \`rangeComponent\` property.`
    }
  }
);

//variable for next story
const CustomMeasure = ({
  x,
  y,
  width,
  height,
  color,
  onMouseEnter,
  onMouseMove,
  onMouseLeave
}) => (
  <rect
    x={x + 2}
    y={y + 2}
    rx={height / 2}
    ry={height / 2}
    width={width - 4}
    height={height - 4}
    fill={color}
    onMouseEnter={onMouseEnter}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
  />
);

//story for the prior variable
stories.add(
  "custom measure",
  () => <Bullet {...commonProps} measureComponent={CustomMeasure} />,
  {
    info: {
      text: `You can customize measures using the \`measureComponent\` property.`
    }
  }
);

//variable for next story
const CustomMarker = ({
  x,
  size,
  color,
  onMouseEnter,
  onMouseMove,
  onMouseLeave
}) => (
  <g
    transform={`translate(${x},0)`}
    onMouseEnter={onMouseEnter}
    onMouseMove={onMouseMove}
    onMouseLeave={onMouseLeave}
  >
    <line
      x1={0}
      x2={0}
      y1={0}
      y2={size}
      stroke={color}
      strokeWidth={2}
      strokeDasharray="2,3"
      fill="none"
    />
    <path d="M0 -10 L 10 0 L 0 10 L -10 0 Z" fill={color} />
    <path
      transform={`translate(0,${size})`}
      d="M0 -10 L 10 0 L 0 10 L -10 0 Z"
      fill={color}
    />
  </g>
);

//story for the prior variable
stories.add(
  "custom marker",
  () => (
    <Bullet {...commonProps} markerSize={1} markerComponent={CustomMarker} />
  ),
  {
    info: {
      text: `You can customize markers using the \`markerComponent\` property.`
    }
  }
);

//story
stories.add("custom title", () => (
  <Bullet
    {...commonProps}
    margin={{ ...commonProps.margin, left: 140 }}
    titleOffsetX={-110}
    data={data.map(d => ({
      ...d,
      title: (
        <text dy={-12}>
          <tspan
            style={{
              fill: "#000",
              fontWeight: 500,
              fontSize: "14px"
            }}
          >
            {d.id}
          </tspan>
          <tspan
            x={0}
            dy={18}
            style={{
              fill: "#999",
              fontSize: "12px"
            }}
          >
            description
          </tspan>
          <tspan
            x={0}
            dy={16}
            style={{
              fill: "#999",
              fontSize: "12px"
            }}
          >
            for {d.id}
          </tspan>
        </text>
      )
    }))}
  />
));

//****  ****  ****  ****
//LINE
//****  ****  ****  ****

/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component, useState, useEffect } from "react";
import range from "lodash/range";
import last from "lodash/last";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, select } from "@storybook/addon-knobs";
import { generateDrinkStats } from "@nivo/generators";
import { Defs } from "@nivo/core";
import { area, curveMonotoneX } from "d3-shape";
import * as time from "d3-time";
import { timeFormat } from "d3-time-format";
import { Line } from "../src";

//data set
const data = generateDrinkStats(18);

//common layout
const commonProperties = {
  width: 900,
  height: 400,
  margin: { top: 20, right: 20, bottom: 60, left: 80 },
  data,
  animate: true,
  enableSlices: "x"
};

//curve classifications
const curveOptions = ["linear", "monotoneX", "step", "stepBefore", "stepAfter"];

//symbol variable
const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
  <g>
    <circle
      fill="#fff"
      r={size / 2}
      strokeWidth={borderWidth}
      stroke={borderColor}
    />
    <circle
      r={size / 5}
      strokeWidth={borderWidth}
      stroke={borderColor}
      fill={color}
      fillOpacity={0.35}
    />
  </g>
);

//append stories .map
const stories = storiesOf("Line", module);

//include Knobs
stories.addDecorator(withKnobs);

//story
stories.add(
  "stacked lines",
  () => (
    <Line
      {...commonProperties}
      yScale={{
        type: "linear",
        stacked: true
      }}
      curve={select("curve", curveOptions, "linear")}
    />
  ),
  {
    info: {
      text: `
                You can stack lines using the \`yScale.stacked\` property.
                Please note that stacking is only supported for linear scales.
            `
    }
  }
);

//story
stories.add(
  "linear scale",
  () => (
    <Line
      {...commonProperties}
      curve="monotoneX"
      data={[
        {
          id: "fake corp. A",
          data: [
            { x: 0, y: 7 },
            { x: 1, y: 5 },
            { x: 2, y: 11 },
            { x: 3, y: 9 },
            { x: 4, y: 13 },
            { x: 7, y: 16 },
            { x: 9, y: 12 }
          ]
        }
      ]}
      xScale={{
        type: "linear",
        min: 0,
        max: "auto"
      }}
      axisLeft={{
        legend: "linear scale",
        legendOffset: 12
      }}
      axisBottom={{
        legend: "linear scale",
        legendOffset: -12
      }}
    />
  ),
  {
    info: {
      text: `
                By default, \`xScale\` is a point scale, but you can switch to linear using
                the \`xScale.type\` property. It supports irregular intervals while \`point\`
                scale doesn't.
                
                If you want missing datums to appear as holes instead of connecting defined ones,
                you should set their y value to \`null\`.
            `
    }
  }
);

//story
stories.add("time scale", () => (
  <Line
    {...commonProperties}
    data={[
      {
        id: "fake corp. A",
        data: [
          { x: "2018-01-01", y: 7 },
          { x: "2018-01-02", y: 5 },
          { x: "2018-01-03", y: 11 },
          { x: "2018-01-04", y: 9 },
          { x: "2018-01-05", y: 12 },
          { x: "2018-01-06", y: 16 },
          { x: "2018-01-07", y: 13 },
          { x: "2018-01-08", y: 13 }
        ]
      },
      {
        id: "fake corp. B",
        data: [
          { x: "2018-01-04", y: 14 },
          { x: "2018-01-05", y: 14 },
          { x: "2018-01-06", y: 15 },
          { x: "2018-01-07", y: 11 },
          { x: "2018-01-08", y: 10 },
          { x: "2018-01-09", y: 12 },
          { x: "2018-01-10", y: 9 },
          { x: "2018-01-11", y: 7 }
        ]
      }
    ]}
    xScale={{
      type: "time",
      format: "%Y-%m-%d",
      precision: "day"
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: "linear",
      stacked: boolean("stacked", false)
    }}
    axisLeft={{
      legend: "linear scale",
      legendOffset: 12
    }}
    axisBottom={{
      format: "%b %d",
      tickValues: "every 2 days",
      legend: "time scale",
      legendOffset: -12
    }}
    curve={select("curve", curveOptions, "monotoneX")}
    enablePointLabel={true}
    pointSymbol={CustomSymbol}
    pointSize={16}
    pointBorderWidth={1}
    pointBorderColor={{
      from: "color",
      modifiers: [["darker", 0.3]]
    }}
    useMesh={true}
    enableSlices={false}
  />
));

//story
stories.add("logarithmic scale", () => (
  <Line
    {...commonProperties}
    data={[
      {
        id: "fake corp. A",
        data: [
          { x: 1, y: 12 },
          { x: 2, y: 123 },
          { x: 3, y: 870 },
          { x: 4, y: 21000 },
          { x: 7, y: 400000 },
          { x: 9, y: 10000 },
          { x: 16, y: 10000000 }
        ]
      }
    ]}
    gridYValues={[10, 100, 1000, 10000, 100000, 1000000, 10000000]}
    xScale={{
      type: "log",
      base: 2,
      max: "auto"
    }}
    axisBottom={{
      legend: "logarithmic scale (base: 2)",
      legendOffset: -12
    }}
    yScale={{
      type: "log",
      base: 10,
      max: "auto"
    }}
    axisLeft={{
      tickValues: [10, 100, 1000, 10000, 100000, 1000000, 10000000],
      legend: "logarithmic scale (base: 10)",
      legendOffset: 12
    }}
    useMesh={true}
    enableSlices={false}
  />
));

//create the new class for the next story
class RealTimeChart extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    this.state = {
      dataA: range(100).map(i => ({
        x: time.timeMinute.offset(date, i * 30),
        y: 10 + Math.round(Math.random() * 20)
      })),
      dataB: range(100).map(i => ({
        x: time.timeMinute.offset(date, i * 30),
        y: 30 + Math.round(Math.random() * 20)
      })),
      dataC: range(100).map(i => ({
        x: time.timeMinute.offset(date, i * 30),
        y: 60 + Math.round(Math.random() * 20)
      }))
    };

    this.formatTime = timeFormat("%Y %b %d");
  }

  componentDidMount() {
    this.timer = setInterval(this.next, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  next = () => {
    const dataA = this.state.dataA.slice(1);
    dataA.push({
      x: time.timeMinute.offset(last(dataA).x, 30),
      y: 10 + Math.round(Math.random() * 20)
    });
    const dataB = this.state.dataB.slice(1);
    dataB.push({
      x: time.timeMinute.offset(last(dataB).x, 30),
      y: 30 + Math.round(Math.random() * 20)
    });
    const dataC = this.state.dataC.slice(1);
    dataC.push({
      x: time.timeMinute.offset(last(dataC).x, 30),
      y: 60 + Math.round(Math.random() * 20)
    });

    this.setState({ dataA, dataB, dataC });
  };

  render() {
    const { dataA, dataB, dataC } = this.state;

    return (
      <Line
        {...commonProperties}
        margin={{ top: 30, right: 50, bottom: 60, left: 50 }}
        data={[
          { id: "A", data: dataA },
          { id: "B", data: dataB },
          { id: "C", data: dataC }
        ]}
        xScale={{ type: "time", format: "native" }}
        yScale={{ type: "linear", max: 100 }}
        axisTop={{
          format: "%H:%M",
          tickValues: "every 4 hours"
        }}
        axisBottom={{
          format: "%H:%M",
          tickValues: "every 4 hours",
          legend: `${this.formatTime(dataA[0].x)} ——— ${this.formatTime(
            last(dataA).x
          )}`,
          legendPosition: "middle",
          legendOffset: 46
        }}
        axisRight={{}}
        enablePoints={false}
        enableGridX={true}
        curve="monotoneX"
        animate={false}
        motionStiffness={120}
        motionDamping={50}
        isInteractive={false}
        enableSlices={false}
        useMesh={true}
        theme={{
          axis: { ticks: { text: { fontSize: 14 } } },
          grid: { line: { stroke: "#ddd", strokeDasharray: "1 2" } }
        }}
      />
    );
  }
}

//story for the prior class
stories.add("real time chart", () => <RealTimeChart />);

//variable for next story
const GrowingLine = () => {
  const [points, setPoints] = useState([{ x: 0, y: 50 }]);

  useEffect(() => {
    if (points.length === 101) return;

    setTimeout(() => {
      setPoints(p => {
        const prev = p[p.length - 1];

        return [
          ...p,
          {
            x: prev.x + 1,
            y: Math.max(Math.min(prev.y + Math.random() * 10 - 5, 100), 0)
          }
        ];
      });
    }, 300);
  }, [points, setPoints]);

  return (
    <Line
      {...commonProperties}
      yScale={{
        type: "linear",
        min: 0,
        max: "auto"
      }}
      xScale={{
        type: "linear",
        min: 0,
        max: "auto"
      }}
      data={[{ id: "serie", data: points }]}
      axisBottom={{
        tickValues: 4
      }}
      axisLeft={{
        tickValues: 4
      }}
      isInteractive={false}
      animate={false}
      enableArea={true}
    />
  );
};

//story for prior variable
stories.add("growing line", () => <GrowingLine />);

//story
stories.add("custom point symbol", () => (
  <Line
    {...commonProperties}
    yScale={{
      type: "linear",
      stacked: boolean("stacked", true)
    }}
    curve={select("curve", curveOptions, "monotoneX")}
    pointSymbol={CustomSymbol}
    pointSize={16}
    pointBorderWidth={1}
    pointBorderColor={{
      from: "color",
      modifiers: [["darker", 0.3]]
    }}
    axisLeft={{
      tickSize: 10
    }}
  />
));

//story
stories.add("using data colors", () => (
  <Line
    {...commonProperties}
    yScale={{
      type: "linear",
      stacked: true
    }}
    curve="linear"
    colors={{ datum: "color" }}
    enablePointLabel={true}
    pointSize={10}
    pointBorderColor={{ theme: "background" }}
    pointBorderWidth={2}
    enableSlices={false}
    useMesh={true}
  />
));

//story
stories.add("adding markers", () => (
  <Line
    {...commonProperties}
    yScale={{
      type: "linear",
      stacked: boolean("stacked", true)
    }}
    curve={select("curve", curveOptions, "catmullRom")}
    markers={[
      {
        axis: "y",
        value: 100,
        lineStyle: { stroke: "#b0413e", strokeWidth: 2 },
        legend: "y marker",
        legendOrientation: "vertical"
      },
      {
        axis: "x",
        value: data[0].data[5].x,
        lineStyle: { stroke: "#b0413e", strokeWidth: 2 },
        legend: "x marker"
      }
    ]}
  />
));

//story
stories.add(
  "holes in data",
  () => (
    <Line
      {...commonProperties}
      data={[
        {
          id: "fake corp. A",
          data: [4, 8, 5, null, 2, 1, 4, null, 8, 9, 5].map((y, i) => ({
            x: `#${i}`,
            y
          }))
        },
        {
          id: "fake corp. B",
          data: [5, 9, 8, 6, 3, 1, 2, null, 5, 8, 4].map((y, i) => ({
            x: `#${i}`,
            y
          }))
        }
      ]}
      yScale={{
        type: "linear",
        stacked: boolean("stacked", false)
      }}
      curve={select("curve", curveOptions, "monotoneX")}
      pointSize={8}
      pointBorderColor="#fff"
      pointBorderWidth={2}
    />
  ),
  {
    info: {
      text: `You can skip portions of the lines by setting y value to \`null\`.`
    }
  }
);

//story
stories.add(
  "different serie lengths",
  () => (
    <Line
      {...commonProperties}
      data={[
        {
          id: "fake corp. A",
          data: [
            { x: 0, y: 7 },
            { x: 1, y: 5 },
            { x: 2, y: 11 },
            { x: 3, y: 12 },
            { x: 4, y: 13 },
            { x: 5, y: null },
            { x: 6, y: 18 },
            { x: 7, y: 16 },
            { x: 8, y: 8 },
            { x: 9, y: 10 },
            { x: 10, y: 9 }
          ]
        },
        {
          id: "fake corp. B",
          data: [
            { x: 3, y: 14 },
            { x: 4, y: 16 },
            { x: 5, y: 19 },
            { x: 6, y: 20 },
            { x: 7, y: 18 }
          ]
        }
      ]}
      xScale={{
        type: "linear",
        min: 0,
        max: "auto"
      }}
      yScale={{
        type: "linear",
        stacked: boolean("stacked", false)
      }}
      curve="monotoneX"
    />
  ),
  {
    info: {
      text: `
                Please note that when using stacked y scale with variable length/data holes,
                if one of the y value is \`null\` all subsequent values will be skipped
                as we cannot properly compute the sum. 
            `
    }
  }
);

//story
stories.add("custom min/max y", () => (
  <Line
    {...commonProperties}
    markers={[
      {
        axis: "y",
        value: 0,
        lineStyle: { stroke: "#b0413e", strokeWidth: 1 },
        legend: "y marker at 0",
        legendPosition: "bottom-left"
      }
    ]}
    data={[
      {
        id: "fake corp. A",
        data: [
          0.5,
          0.6,
          0.8,
          0.7,
          0.8,
          0.5,
          0.2,
          0.3,
          0.4,
          0.5,
          0.5,
          0.1,
          -0.2,
          -0.6,
          -0.1,
          0,
          0.1,
          -0.1,
          -0.4,
          -0.6,
          -0.5,
          0.2,
          0.5,
          0.6,
          0.6
        ].map((y, i) => ({ x: `#${i}`, y }))
      },
      {
        id: "fake corp. B",
        data: [
          0.9,
          0.5,
          0.6,
          0.5,
          0.4,
          0.3,
          -0.1,
          -0.5,
          -0.4,
          -0.4,
          -0.1,
          -0.3,
          -0.2,
          0.1,
          0.1,
          0.3,
          0.4,
          0.5,
          0.4,
          0.6,
          0.5,
          0.7,
          0.8,
          0.4,
          0.3
        ].map((y, i) => ({ x: `#${i}`, y }))
      }
    ]}
    curve={select("curve", curveOptions, "monotoneX")}
    pointSize={8}
    pointBorderColor="#fff"
    pointBorderWidth={2}
    yScale={{
      type: "linear",
      stacked: boolean("stacked", false),
      min: -1,
      max: 1
    }}
  />
));

//story
stories.add("non linear values", () => (
  <Line
    {...commonProperties}
    xScale={{
      type: "linear",
      min: 0,
      max: 12
    }}
    yScale={{
      type: "linear",
      min: 0,
      max: 11
    }}
    colors="black"
    curve="linear"
    animate={false}
    lineWidth={4}
    pointSize={8}
    pointColor="white"
    pointBorderColor={{ from: "serieColor" }}
    pointBorderWidth={2}
    enableSlices={false}
    useMesh={true}
    debugMesh={true}
    data={[
      {
        id: "nivo",
        data: [
          { x: 1, y: 1 },
          { x: 1, y: 10 },
          { x: 2.25, y: 10 },
          { x: 3, y: 4 },
          { x: 3, y: 10 },
          { x: 4, y: 10 },
          { x: 4, y: 1 },
          { x: 2.75, y: 1 },
          { x: 2, y: 7 },
          { x: 2, y: 1 },
          { x: 1, y: 1 },
          { x: null, y: null },
          { x: 4.5, y: 1 },
          { x: 5.5, y: 1 },
          { x: 5.5, y: 10 },
          { x: 4.5, y: 10 },
          { x: 4.5, y: 1 },
          { x: null, y: null },
          { x: 6.5, y: 1 },
          { x: 7.5, y: 1 },
          { x: 8.5, y: 10 },
          { x: 7.5, y: 10 },
          { x: 7, y: 4 },
          { x: 6.5, y: 10 },
          { x: 5.5, y: 10 },
          { x: 6.5, y: 1 },
          { x: null, y: null },
          { x: 9.5, y: 1 },
          { x: 10.5, y: 1 },
          { x: 11.5, y: 3 },
          { x: 11.5, y: 8 },
          { x: 10.5, y: 10 },
          { x: 9.5, y: 10 },
          { x: 8.5, y: 8 },
          { x: 8.5, y: 3 },
          { x: 9.5, y: 1 },
          { x: null, y: null },
          { x: 9.5, y: 4 },
          { x: 10.5, y: 4 },
          { x: 10.5, y: 7 },
          { x: 9.5, y: 7 },
          { x: 9.5, y: 4 }
        ]
      }
    ]}
  />
));

//story
stories.add(
  "highlighting negative values",
  () => (
    <Line
      {...commonProperties}
      data={[
        {
          id: "positive :)",
          data: [
            { x: 0, y: 0.7 },
            { x: 1, y: 0.9 },
            { x: 2, y: 0.8 },
            { x: 3, y: 0.6 },
            { x: 4, y: 0.3 },
            { x: 5, y: 0 },
            { x: 6, y: null },
            { x: 7, y: null },
            { x: 8, y: null },
            { x: 9, y: null },
            { x: 10, y: null },
            { x: 11, y: 0 },
            { x: 12, y: 0.4 },
            { x: 13, y: 0.6 },
            { x: 14, y: 0.5 },
            { x: 15, y: 0.3 },
            { x: 16, y: 0.4 },
            { x: 17, y: 0 }
          ]
        },
        {
          id: "negative :(",
          data: [
            { x: 5, y: 0 },
            { x: 6, y: -0.3 },
            { x: 7, y: -0.5 },
            { x: 8, y: -0.9 },
            { x: 9, y: -0.2 },
            { x: 10, y: -0.4 },
            { x: 11, y: 0 },
            { x: 12, y: null },
            { x: 13, y: null },
            { x: 14, y: null },
            { x: 15, y: null },
            { x: 16, y: null },
            { x: 17, y: 0 },
            { x: 18, y: -0.4 },
            { x: 19, y: -0.2 },
            { x: 20, y: -0.1 },
            { x: 21, y: -0.6 }
          ]
        }
      ]}
      curve={select("curve", curveOptions, "monotoneX")}
      enablePointLabel={true}
      pointSymbol={CustomSymbol}
      pointSize={14}
      pointBorderWidth={1}
      pointBorderColor={{
        from: "color",
        modifiers: [["darker", 0.3]]
      }}
      pointLabelYOffset={-20}
      enableGridX={false}
      colors={["rgb(97, 205, 187)", "rgb(244, 117, 96)"]}
      xScale={{
        type: "linear"
      }}
      yScale={{
        type: "linear",
        stacked: false,
        min: -1,
        max: 1
      }}
      enableArea={true}
      areaOpacity={0.07}
      enableSlices={false}
      useMesh={true}
      crosshairType="cross"
    />
  ),
  {
    info: {
      text: `
                You can have two different line styles for a line if you split it into
                two data set, one containing positive values and negative values filled with \`null\`
                and the other having only negative values and positive ones replaced by \`null\`.
            `
    }
  }
);

//story
stories.add("formatting axis values", () => (
  <Line
    {...commonProperties}
    curve="monotoneX"
    yScale={{
      type: "linear",
      stacked: boolean("stacked", true)
    }}
    axisLeft={{
      format: value =>
        `${Number(value).toLocaleString("ru-RU", {
          minimumFractionDigits: 2
        })} ₽`
    }}
  />
));

//story
stories.add("formatting values", () => (
  <Line
    {...commonProperties}
    curve="monotoneX"
    yScale={{
      type: "linear",
      stacked: boolean("stacked", true)
    }}
    yFormat={value =>
      `${Number(value).toLocaleString("ru-RU", {
        minimumFractionDigits: 2
      })} ₽`
    }
  />
));

//story
stories.add("custom tooltip", () => (
  <Line
    {...commonProperties}
    enableSlices="x"
    curve={select("curve", curveOptions, "linear")}
    yScale={{
      type: "linear",
      stacked: boolean("stacked", true)
    }}
    sliceTooltip={({ slice }) => {
      return (
        <div
          style={{
            background: "white",
            padding: "9px 12px",
            border: "1px solid #ccc"
          }}
        >
          <div>x: {slice.id}</div>
          {slice.points.map(point => (
            <div
              key={point.id}
              style={{
                color: point.serieColor,
                padding: "3px 0"
              }}
            >
              <strong>{point.serieId}</strong> [{point.data.yFormatted}]
            </div>
          ))}
        </div>
      );
    }}
  />
));

//variable for next story
const AreaLayer = ({ series, xScale, yScale, innerHeight }) => {
  const areaGenerator = area()
    .x(d => xScale(d.data.x))
    .y0(d => Math.min(innerHeight, yScale(d.data.y - 40)))
    .y1(d => yScale(d.data.y + 10))
    .curve(curveMonotoneX);

  return (
    <>
      <Defs
        defs={[
          {
            id: "pattern",
            type: "patternLines",
            background: "transparent",
            color: "#3daff7",
            lineWidth: 1,
            spacing: 6,
            rotation: -45
          }
        ]}
      />
      <path
        d={areaGenerator(series[0].data)}
        fill="url(#pattern)"
        fillOpacity={0.6}
        stroke="#3daff7"
        strokeWidth={2}
      />
    </>
  );
};

//story for prior variable
stories.add(
  "custom layers",
  () => (
    <Line
      {...commonProperties}
      yScale={{
        type: "linear",
        stacked: true
      }}
      data={commonProperties.data.filter(d =>
        ["rhum", "whisky"].includes(d.id)
      )}
      lineWidth={3}
      curve="linear"
      colors={["#028ee6", "#774dd7"]}
      enableGridX={false}
      pointSize={12}
      pointColor="white"
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      layers={[
        "grid",
        "markers",
        "areas",
        AreaLayer,
        "lines",
        "slices",
        "axes",
        "points",
        "legends"
      ]}
      theme={{
        crosshair: {
          line: {
            strokeWidth: 2,
            stroke: "#774dd7",
            strokeOpacity: 1
          }
        }
      }}
    />
  ),
  {
    info: {
      text: `
                You can use the layers property to add extra layers
                to the line chart.
            `
    }
  }
);

//variable for next story
const styleById = {
  cognac: {
    strokeDasharray: "12, 6",
    strokeWidth: 2
  },
  vodka: {
    strokeDasharray: "1, 16",
    strokeWidth: 8,
    strokeLinejoin: "round",
    strokeLinecap: "round"
  },
  rhum: {
    strokeDasharray: "6, 6",
    strokeWidth: 4
  },
  default: {
    strokeWidth: 1
  }
};

const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
  return series.map(({ id, data, color }) => (
    <path
      key={id}
      d={lineGenerator(
        data.map(d => ({
          x: xScale(d.data.x),
          y: yScale(d.data.y)
        }))
      )}
      fill="none"
      stroke={color}
      style={styleById[id] || styleById.default}
    />
  ));
};

//story for prior variable
stories.add(
  "custom line style",
  () => (
    <Line
      {...commonProperties}
      xScale={{
        type: "point",
        min: "auto",
        max: "auto"
      }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto"
      }}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0
      }}
      layers={[
        "grid",
        "markers",
        "areas",
        DashedLine,
        "slices",
        "points",
        "axes",
        "legends"
      ]}
    />
  ),
  {
    info: {
      text: `You can customize line styles using the 'layers' property and implement your own line rendering.`
    }
  }
);

//****  ****  ****  ****
//RADAR
//****  ****  ****  ****

import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { generateWinesTastes } from "@nivo/generators";
import { Radar } from "../src";

//common layout
const commonProperties = {
  width: 900,
  height: 500,
  margin: { top: 60, right: 80, bottom: 20, left: 80 },
  ...generateWinesTastes(),
  indexBy: "taste",
  animate: true
};

//common curve types
const curveOptions = [
  "linearClosed",
  "basisClosed",
  "catmullRomClosed",
  "cardinalClosed"
];

//append to stories .map
const stories = storiesOf("Radar", module);

//include knobs
stories.addDecorator(withKnobs);

//story
stories.add("default", () => <Radar {...commonProperties} />);

//story
stories.add("with custom curve", () => (
  <Radar {...commonProperties} gridShape="linear" curve="catmullRomClosed" />
));

//story
stories.add("linear grid shape", () => (
  <Radar
    {...commonProperties}
    gridShape="linear"
    curve={select("curve", curveOptions, "linearClosed")}
  />
));

//story
stories.add("with dot label", () => (
  <Radar
    {...commonProperties}
    curve={select("curve", curveOptions, "linearClosed")}
    gridShape="linear"
    dotSize={10}
    dotBorderColor="#fff"
    dotBorderWidth={2}
    enableDotLabel={true}
    gridLabelOffset={36}
  />
));

//story
stories.add("abusing dots", () => (
  <Radar
    {...commonProperties}
    curve={select("curve", curveOptions, "catmullRomClosed")}
    dotSize={32}
    enableDotLabel={true}
    dotLabelYOffset={3}
    gridLabelOffset={36}
  />
));

//variable for next story
const CustomSymbol = ({ size, color, borderWidth, borderColor }) => (
  <rect
    transform={`rotate(45) translate(${size * -0.5}, ${size * -0.5})`}
    width={size}
    height={size}
    fill={color}
    strokeWidth={borderWidth}
    fillOpacity={1}
    stroke={borderColor}
  />
);

//story for prior variable
stories.add("custom dot symbol", () => (
  <Radar
    {...commonProperties}
    curve={select("curve", curveOptions, "catmullRomClosed")}
    dotSize={18}
    dotSymbol={CustomSymbol}
    dotBorderWidth={1}
    dotBorderColor="inherit:darker(0.3)"
    gridLabelOffset={36}
  />
));

//story
stories.add("with formatted values", () => (
  <Radar
    {...commonProperties}
    tooltipFormat={value =>
      `${Number(value).toLocaleString("ru-RU", {
        minimumFractionDigits: 2
      })} ₽`
    }
  />
));

//variable for next story
const LabelComponent = ({ id, anchor }) => (
  <g
    transform={`translate(${
      anchor === "end" ? -60 : anchor === "middle" ? -30 : 0
    }, -20)`}
  >
    <text>{id}</text>
    <text
      y={24}
      style={{
        fontSize: 24,
        fontWeight: "bold",
        fill: "#3a9896"
      }}
    >
      +{Math.round(Math.random() * 100)}%
    </text>
  </g>
);

//story for prior variable
stories.add("custom label component", () => (
  <Radar {...commonProperties} gridLabel={LabelComponent} />
));

//****  ****  ****  ****
//SCATTERPLOT
//****  ****  ****  ****

import React, { useState, useCallback, useMemo } from "react";
import omit from "lodash/omit";
import { area, curveMonotoneX } from "d3-shape";
import { storiesOf } from "@storybook/react";
import { ScatterPlot, ResponsiveScatterPlot } from "../src";

//data set
const sampleData = [
  {
    id: "girls low",
    data: [
      { id: 0, x: 0, y: 2.0, z: 1 },
      { id: 1, x: 1, y: 2.1, z: 2 },
      { id: 2, x: 2, y: 2.3, z: 4 },
      { id: 3, x: 3, y: 2.5, z: 1 },
      { id: 4, x: 4, y: 2.7, z: 3 },
      { id: 5, x: 5, y: 2.9, z: 0 },
      { id: 6, x: 6, y: 3.0, z: 1 },
      { id: 7, x: 7, y: 3.2, z: 3 },
      { id: 8, x: 8, y: 3.3, z: 2 },
      { id: 9, x: 9, y: 3.5, z: 3 },
      { id: 10, x: 10, y: 3.6, z: 0 },
      { id: 11, x: 11, y: 3.8, z: 0 },
      { id: 12, x: 12, y: 3.9, z: 4 },
      { id: 13, x: 13, y: 4.0, z: 1 }
    ]
  },
  {
    id: "girls med",
    data: [
      { id: 0, x: 0, y: 3.2, z: 1 },
      { id: 1, x: 1, y: 3.3, z: 3 },
      { id: 2, x: 2, y: 3.6, z: 4 },
      { id: 3, x: 3, y: 3.8, z: 0 },
      { id: 4, x: 4, y: 4.1, z: 1 },
      { id: 5, x: 5, y: 4.3, z: 1 },
      { id: 6, x: 6, y: 4.6, z: 2 },
      { id: 7, x: 7, y: 4.8, z: 2 },
      { id: 8, x: 8, y: 5.0, z: 3 },
      { id: 9, x: 9, y: 5.2, z: 0 },
      { id: 10, x: 10, y: 5.4, z: 1 },
      { id: 11, x: 11, y: 5.5, z: 1 },
      { id: 12, x: 12, y: 5.7, z: 2 },
      { id: 13, x: 13, y: 5.8, z: 4 }
    ]
  },
  {
    id: "girls high",
    data: [
      { id: 0, x: 0, y: 4.8, z: 4 },
      { id: 1, x: 1, y: 5.1, z: 3 },
      { id: 2, x: 2, y: 5.4, z: 4 },
      { id: 3, x: 3, y: 5.7, z: 1 },
      { id: 4, x: 4, y: 6.1, z: 0 },
      { id: 5, x: 5, y: 6.5, z: 1 },
      { id: 6, x: 6, y: 6.8, z: 2 },
      { id: 7, x: 7, y: 7.1, z: 3 },
      { id: 8, x: 8, y: 7.3, z: 3 },
      { id: 9, x: 9, y: 7.6, z: 1 },
      { id: 10, x: 10, y: 7.8, z: 1 },
      { id: 11, x: 11, y: 8.1, z: 0 },
      { id: 12, x: 12, y: 8.3, z: 4 },
      { id: 13, x: 13, y: 8.5, z: 1 }
    ]
  },
  {
    id: "boys low",
    data: [
      { id: 0, x: 0, y: 2.5, z: 3 },
      { id: 1, x: 1, y: 2.6, z: 2 },
      { id: 2, x: 2, y: 2.8, z: 0 },
      { id: 3, x: 3, y: 3.1, z: 0 },
      { id: 4, x: 4, y: 3.3, z: 1 },
      { id: 5, x: 5, y: 3.5, z: 4 },
      { id: 6, x: 6, y: 3.8, z: 4 },
      { id: 7, x: 7, y: 4.0, z: 4 },
      { id: 8, x: 8, y: 4.2, z: 3 },
      { id: 9, x: 9, y: 4.4, z: 2 },
      { id: 10, x: 10, y: 4.5, z: 1 },
      { id: 11, x: 11, y: 4.7, z: 0 },
      { id: 12, x: 12, y: 4.9, z: 0 },
      { id: 13, x: 13, y: 5.0, z: 3 }
    ]
  },
  {
    id: "boys med",
    data: [
      { id: 0, x: 0, y: 3.3, z: 0 },
      { id: 1, x: 1, y: 3.5, z: 4 },
      { id: 2, x: 2, y: 3.8, z: 3 },
      { id: 3, x: 3, y: 4.1, z: 3 },
      { id: 4, x: 4, y: 4.4, z: 2 },
      { id: 5, x: 5, y: 4.7, z: 2 },
      { id: 6, x: 6, y: 4.9, z: 2 },
      { id: 7, x: 7, y: 5.2, z: 1 },
      { id: 8, x: 8, y: 5.4, z: 1 },
      { id: 9, x: 9, y: 5.6, z: 0 },
      { id: 10, x: 10, y: 5.8, z: 3 },
      { id: 11, x: 11, y: 6.0, z: 4 },
      { id: 12, x: 12, y: 6.2, z: 2 },
      { id: 13, x: 13, y: 6.4, z: 1 }
    ]
  },
  {
    id: "boys high",
    data: [
      { id: 0, x: 0, y: 5.0, z: 4 },
      { id: 1, x: 1, y: 5.3, z: 3 },
      { id: 2, x: 2, y: 5.6, z: 2 },
      { id: 3, x: 3, y: 6.0, z: 2 },
      { id: 4, x: 4, y: 6.4, z: 1 },
      { id: 5, x: 5, y: 6.8, z: 2 },
      { id: 6, x: 6, y: 7.2, z: 1 },
      { id: 7, x: 7, y: 7.5, z: 3 },
      { id: 8, x: 8, y: 7.8, z: 4 },
      { id: 9, x: 9, y: 8.0, z: 1 },
      { id: 10, x: 10, y: 8.3, z: 0 },
      { id: 11, x: 11, y: 8.5, z: 2 },
      { id: 12, x: 12, y: 8.8, z: 1 },
      { id: 13, x: 13, y: 9.0, z: 4 }
    ]
  }
];

//common layout
const commonProps = {
  width: 900,
  height: 500,
  margin: { top: 24, right: 24, bottom: 80, left: 80 },
  nodeSize: 10,
  blendMode: "multiply",
  xFormat: d => `week ${d}`,
  yFormat: d => `${d} kg`,
  axisBottom: {
    format: d => `week ${d}`
  },
  axisLeft: {
    format: d => `${d} kg`
  },
  data: sampleData,
  legends: [
    {
      anchor: "bottom-left",
      direction: "row",
      translateY: 60,
      itemWidth: 130,
      itemHeight: 12,
      symbolSize: 12,
      symbolShape: "circle"
    }
  ]
};

//append to stories .map
const stories = storiesOf("ScatterPlot", module);

//story
stories.add("default", () => (
  <ScatterPlot {...commonProps} data={[sampleData[1]]} />
));

//story
stories.add("multiple series", () => <ScatterPlot {...commonProps} />);

//story
stories.add("alternative colors", () => (
  <ScatterPlot {...commonProps} colors={{ scheme: "category10" }} />
));

//story
stories.add("using time scales", () => (
  <ScatterPlot
    {...commonProps}
    data={[
      {
        id: "apples",
        data: [
          { x: "2018-01-01", y: 7 },
          { x: "2018-01-02", y: 5 },
          { x: "2018-01-03", y: 11 },
          { x: "2018-01-04", y: 9 },
          { x: "2018-01-05", y: 12 },
          { x: "2018-01-06", y: 16 },
          { x: "2018-01-07", y: 13 },
          { x: "2018-01-08", y: 13 }
        ]
      },
      {
        id: "oranges",
        data: [
          { x: "2018-01-04", y: 14 },
          { x: "2018-01-05", y: 14 },
          { x: "2018-01-06", y: 15 },
          { x: "2018-01-07", y: 11 },
          { x: "2018-01-08", y: 10 },
          { x: "2018-01-09", y: 12 },
          { x: "2018-01-10", y: 9 },
          { x: "2018-01-11", y: 7 }
        ]
      }
    ]}
    xScale={{
      type: "time",
      format: "%Y-%m-%d",
      precision: "day"
    }}
    xFormat="time:%Y-%m-%d"
    axisBottom={{
      format: "%b %d",
      tickValues: "every 2 days"
    }}
  />
));

//story
stories.add("using logarithmic scales", () => (
  <ScatterPlot
    {...commonProps}
    data={[
      {
        id: "apples",
        data: [
          { x: 10, y: 2 },
          { x: 100, y: 4 },
          { x: 1000, y: 8 },
          { x: 10000, y: 16 },
          { x: 100000, y: 32 },
          { x: 1000000, y: 64 }
        ]
      }
    ]}
    xScale={{
      type: "log",
      base: 10
    }}
    xFormat={undefined}
    yScale={{
      type: "log",
      base: 2
    }}
    yFormat={undefined}
    axisBottom={{
      tickValues: [10, 100, 1000, 1000, 10000, 100000, 1000000, 10000000]
    }}
    axisLeft={{
      tickValues: [2, 4, 8, 16, 32, 64]
    }}
  />
));

//story
stories.add("node size", () => <ScatterPlot {...commonProps} nodeSize={24} />);

//story
stories.add("varying node size", () => (
  <ScatterPlot
    {...commonProps}
    nodeSize={{ key: "z", values: [0, 4], sizes: [9, 32] }}
  />
));

//story
stories.add("custom tooltip", () => (
  <ScatterPlot
    {...commonProps}
    tooltip={({ node }) => (
      <div
        style={{
          color: node.style.color,
          background: "#333",
          padding: "12px 16px"
        }}
      >
        <strong>
          {node.id} ({node.serieId})
        </strong>
        <br />
        {`x: ${node.data.formattedX}`}
        <br />
        {`y: ${node.data.formattedY}`}
      </div>
    )}
  />
));

//variable for next story
const SyncCharts = () => {
  const [nodeId, setNodeId] = useState(null);
  const handleMouseMove = useCallback(node => setNodeId(node.id), [setNodeId]);
  const handleMouseLeave = useCallback(() => setNodeId(null), [setNodeId]);
  const getNodeSize = useMemo(
    () => node => {
      if (nodeId !== null && nodeId === node.id) return 46;
      return 8;
    },
    [nodeId]
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
      }}
    >
      <div style={{ height: 400 }}>
        <ResponsiveScatterPlot
          {...omit(commonProps, ["width", "height", "legends"])}
          useMesh={true}
          debugMesh={true}
          colors={{ scheme: "nivo" }}
          nodeSize={getNodeSize}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          axisBottom={{
            tickRotation: -90,
            format: d => `week ${d}`
          }}
        />
      </div>
      <div style={{ height: 400 }}>
        <ResponsiveScatterPlot
          {...omit(commonProps, ["width", "height", "legends"])}
          useMesh={true}
          debugMesh={true}
          colors={{ scheme: "accent" }}
          nodeSize={getNodeSize}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          axisLeft={null}
          axisBottom={{
            tickRotation: -90,
            format: d => `week ${d}`
          }}
        />
      </div>
    </div>
  );
};

//story for prior variable
stories.add("synchronizing charts", () => <SyncCharts />, {
  info: {
    text: `
            You can synchronize several charts using mouse handlers.
            This example wraps 2 scatterplots in a parent component and
            store current symbol id in a state which is then used to
            determine symbol size, using \`onMouseMove\`, \`onMouseLeave\`
            and a custom function for \`nodeSize\`.
            
            Note that \`useMesh\` \`debugMesh\` are enabled on this example
            hence the extra red lines displayed on the chart.
            
            The parent component hooks should look like this:
            
            \`\`\`
            const [nodeId, setNodeId] = useState(null)
            const handleMouseMove = useCallback((node) => setNodeId(node.id), [setNodeId])
            const handleMouseLeave = useCallback(() => setNodeId(null), [setNodeId])
            const getNodeSize = useMemo(
                () => node => {
                    if (nodeId !== null && nodeId === node.id) return 46
                    return 8
                },
                [nodeId]
            )        
            \`\`\`
            
            and the two scatterplots share those properties:
            
            \`\`\`
            <ResponsiveScatterPlot
                {/* other required props */}
                nodeSize={getNodeSize}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            />
            \`\`\`
            
            This approach can also be used to synchronize another chart type.
        `
  }
});

//story
stories.add("using mouse enter/leave", () => (
  <ScatterPlot
    {...commonProps}
    onMouseEnter={(data, e) => {
      console.log({ is: "mouseenter", data, event: e });
    }}
    onMouseLeave={(data, e) => {
      console.log({ is: "mouseleave", data, event: e });
    }}
  />
));

//variable for next story
const CustomNode = ({
  node,
  x,
  y,
  size,
  color,
  blendMode,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  onClick
}) => {
  if (node.data.serieId === "A") {
    return (
      <g transform={`translate(${x},${y})`}>
        <circle
          r={size / 2}
          fill={color}
          style={{ mixBlendMode: blendMode }}
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      </g>
    );
  }

  if (node.data.serieId === "B") {
    return (
      <g transform={`translate(${x},${y}) rotate(45)`}>
        <rect
          x={size * -0.5}
          y={size * -0.5}
          width={size}
          height={size}
          fill={color}
          style={{ mixBlendMode: blendMode }}
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        />
      </g>
    );
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={size * -0.5}
        y={size * -0.5}
        width={size}
        height={size}
        fill={color}
        style={{ mixBlendMode: blendMode }}
        onMouseEnter={onMouseEnter}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
    </g>
  );
};

//story for prior variable
stories.add("custom node", () => (
  <ScatterPlot
    {...commonProps}
    colors={{ scheme: "set2" }}
    nodeSize={32}
    data={[
      {
        id: "A",
        data: [
          { x: 0, y: 2 },
          { x: 1, y: 4 },
          { x: 2, y: 9 },
          { x: 3, y: 7 },
          { x: 4, y: 15 },
          { x: 5, y: 12 },
          { x: 6, y: 9 }
        ]
      },
      {
        id: "B",
        data: [
          { x: 0, y: 1 },
          { x: 1, y: 5 },
          { x: 2, y: 7 },
          { x: 3, y: 3 },
          { x: 4, y: 9 },
          { x: 5, y: 17 },
          { x: 6, y: 5 }
        ]
      },
      {
        id: "C",
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 7 },
          { x: 2, y: 8 },
          { x: 3, y: 11 },
          { x: 4, y: 8 },
          { x: 5, y: 3 },
          { x: 6, y: 1 }
        ]
      }
    ]}
    renderNode={CustomNode}
  />
));

//variable for next story
const AreaLayer = ({ nodes, xScale, yScale }) => {
  const areaGenerator = area()
    .x(d => xScale(d.data.x))
    .y0(d => yScale(d.data.low))
    .y1(d => yScale(d.data.high))
    .curve(curveMonotoneX);

  return <path d={areaGenerator(nodes)} fill="rgba(232, 193, 160, .65)" />;
};

//story for prior variable
stories.add(
  "adding extra layers",
  () => (
    <ScatterPlot
      {...commonProps}
      data={[
        {
          id: "things",
          data: [
            { x: 0, y: 3.3, low: 2.3, high: 4.2 },
            { x: 1, y: 3.5, low: 2.7, high: 4.1 },
            { x: 2, y: 3.8, low: 3.1, high: 4.6 },
            { x: 3, y: 4.1, low: 2.9, high: 4.5 },
            { x: 4, y: 4.4, low: 3.2, high: 5.1 },
            { x: 5, y: 4.7, low: 3.7, high: 5.4 },
            { x: 6, y: 4.9, low: 3.2, high: 5.8 },
            { x: 7, y: 5.2, low: 4.2, high: 6.1 },
            { x: 8, y: 5.4, low: 3.8, high: 6.7 },
            { x: 9, y: 5.6, low: 3.5, high: 7.1 },
            { x: 10, y: 5.8, low: 3.2, high: 6.8 },
            { x: 11, y: 6.0, low: 4, high: 7.2 },
            { x: 12, y: 6.2, low: 4.2, high: 9.1 },
            { x: 13, y: 6.4, low: 3.9, high: 9 }
          ]
        }
      ]}
      yScale={{
        type: "linear",
        max: 10
      }}
      legends={[]}
      layers={[
        "grid",
        "axes",
        AreaLayer,
        "nodes",
        "markers",
        "mesh",
        "legends"
      ]}
    />
  ),
  {
    info: {
      text: `
                You can use the layers property to add extra layers
                to the scatterplot chart.
            `
    }
  }
);

//****  ****  ****  ****
//SUNBURST
//****  ****  ****  ****
import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { generateLibTree } from "@nivo/generators";
import { Sunburst } from "../src";

//common layout
const commonProperties = {
  width: 900,
  height: 500,
  data: generateLibTree(),
  identity: "name",
  value: "loc",
  animate: true
};

//append stories .map
const stories = storiesOf("Sunburst", module);

//include knobs
stories.addDecorator(withKnobs);

//story
stories.add("default", () => <Sunburst {...commonProperties} />);

//story
stories.add("with child color modifier", () => (
  <Sunburst {...commonProperties} childColor="inherit:brighter(0.13)" />
));

//story
stories.add("with child colors independent of parent", () => (
  <Sunburst {...commonProperties} childColor="noinherit" />
));

//****  ****  ****  ****
//SWARMPLOT
//****  ****  ****  ****

/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from "react";
import { storiesOf } from "@storybook/react";
import { generateSwarmPlotData } from "@nivo/generators";
import { SwarmPlot } from "../src";
import SwarmPlotLayers from "./SwarmPlotLayers";
import SwarmPlotRenderNode from "./SwarmPlotRenderNode";

//common layout
const commonProps = {
  width: 700,
  height: 360,
  margin: {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  },
  groupBy: "group",
  identity: "id",
  value: "price",
  valueScale: {
    type: "linear",
    min: 0,
    max: 500
  },
  size: 10,
  ...generateSwarmPlotData(["group A", "group B", "group C"], {
    min: 40,
    max: 60
  })
};

//append to stories .map
const stories = storiesOf("SwarmPlot", module);

//story
stories.add("default", () => <SwarmPlot {...commonProps} />);

//story
stories.add("extra layers", () => <SwarmPlotLayers />);

//story
stories.add("custom node rendering", () => <SwarmPlotRenderNode />);

//story
stories.add("using annotations", () => (
  <SwarmPlot
    {...commonProps}
    useMesh={true}
    annotations={[
      {
        type: "circle",
        match: { index: 40 },
        noteX: 40,
        noteY: 40,
        offset: 4,
        note: "Node at index: 40"
      },
      {
        type: "rect",
        match: { index: 80 },
        noteX: -40,
        noteY: -40,
        offset: 4,
        note: "Node at index: 80"
      },
      {
        type: "dot",
        match: { index: 120 },
        noteX: 0,
        noteY: { abs: -20 },
        size: 6,
        note: "Node at index: 120"
      }
    ]}
  />
));

//****  ****  ****  ****
//WAFFLE
//****  ****  ****  ****

import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { patternDotsDef, patternLinesDef } from "@nivo/core";
import { Waffle } from "../src";
import CustomTooltip from "./CustomTooltip";

//common layout
const total = 200;
const data = [
  {
    id: "men",
    label: "men",
    value: 64,
    color: "#468df3"
  },
  {
    id: "women",
    label: "women",
    value: 72,
    color: "#a053f0"
  }
];
const commonProps = {
  width: 900,
  height: 500,
  total,
  data,
  rows: 24,
  columns: 18
};

//append to stories .map
const stories = storiesOf("Waffle", module);

//story
stories.add("default", () => <Waffle {...commonProps} />);

//story
stories.add("colors", () => (
  <Waffle {...commonProps} colors={{ scheme: "category10" }} />
));

//story
stories.add("using data color", () => (
  <Waffle {...commonProps} colors={{ datum: "color" }} />
));

//story
stories.add("patterns", () => (
  <Waffle
    {...commonProps}
    defs={[
      patternDotsDef("dots", {
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true
      }),
      patternLinesDef("lines", {
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10
      })
    ]}
    fill={[
      { match: { id: "men" }, id: "dots" },
      { match: { id: "women" }, id: "lines" }
    ]}
  />
));

//story
stories.add("fill direction", () => (
  <Waffle
    {...commonProps}
    width={900}
    height={400}
    fillDirection="left"
    rows={18}
    columns={24}
  />
));

//variable for next story
const CustomCell = ({
  position,
  size,
  x,
  y,
  color,
  fill,
  opacity,
  borderWidth,
  borderColor,
  data,
  onHover,
  onLeave,
  onClick
}) => (
  <circle
    r={size / 2}
    cx={x + size / 2}
    cy={y + size / 2}
    fill={fill || color}
    strokeWidth={borderWidth}
    stroke={borderColor}
    opacity={opacity}
    onMouseEnter={onHover}
    onMouseMove={onHover}
    onMouseLeave={onLeave}
    onClick={event => {
      onClick({ position, color, x, y, data }, event);
    }}
  />
);

//story for prior variable
stories.add("custom cell", () => (
  <Waffle {...commonProps} cellComponent={CustomCell} />
));

//story
stories.add("custom tooltip", () => (
  <Waffle
    {...commonProps}
    theme={{
      tooltip: {
        container: {
          background: "#333"
        }
      }
    }}
    tooltip={CustomTooltip}
  />
));

//class for next story
class WaffleLegendToggle extends Component {
  state = {
    hiddenIds: []
  };

  toggle = d => {
    const { hiddenIds } = this.state;
    if (this.state.hiddenIds.includes(d.id)) {
      this.setState({
        hiddenIds: hiddenIds.filter(id => id !== d.id)
      });
    } else {
      this.setState({
        hiddenIds: [...hiddenIds, d.id]
      });
    }
  };

  render() {
    const { hiddenIds } = this.state;

    return (
      <Waffle
        {...commonProps}
        hiddenIds={hiddenIds}
        margin={{ top: 40 }}
        legends={[
          {
            anchor: "top",
            direction: "row",
            translateY: -40,
            itemsSpacing: 10,
            itemWidth: 100,
            itemHeight: 20,
            symbolSize: 20,
            itemTextColor: "#555",
            onClick: this.toggle,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                  itemBackground: "#eee"
                }
              }
            ]
          }
        ]}
      />
    );
  }
}

//story for prior class
stories.add("legend toggle", () => <WaffleLegendToggle />);
