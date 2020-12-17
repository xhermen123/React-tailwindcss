export const legends = [
  {
    dataFrom: "keys",
    anchor: "bottom-right",
    direction: "column",
    justify: false,
    translateX: 0,
    translateY: 0,
    itemsSpacing: 2,
    itemWidth: 100,
    itemHeight: 20,
    itemDirection: "left-to-right",
    itemOpacity: 0.85,
    symbolSize: 20,
    effects: [
      {
        on: "hover",
        style: {
          itemOpacity: 1
        }
      }
    ]
  }
];

export const defaultSettingsBar = {
  groupMode: "stacked",
  layout: "vertical",
  reverse: false,
  enableBarMin: true,
  enableBarMax: true,
  minValue: 0,
  maxValue: 750,
  padding: 0.3,
  innerPadding: 0,
  colorBy: "id",
  borderRadius: 0,
  borderWidth: 0,

  margin: {
    top: 50,
    right: 130,
    bottom: 50,
    left: 60
  },

  enableLabel: true,
  labelSkipWidth: 12,
  labelSkipHeight: 12,

  enableGridX: false,
  enableGridY: true,
  axisTop: {
    enabled: false,
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "country",
    legendPosition: "middle",
    legendOffset: 32
  },
  axisRight: {
    enabled: false,
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "food",
    legendPosition: "middle",
    legendOffset: -40
  },
  axisBottom: {
    enabled: true,
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "country",
    legendPosition: "middle",
    legendOffset: 32
  },
  axisLeft: {
    enabled: true,
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: "food",
    legendPosition: "middle",
    legendOffset: -40
  },

  isInteractive: true,
  legends: legends,
  keys: ["hot dog", "burger", "sandwich", "kebab", "fries", "donut"],

  animate: true,
  motionStiffness: 120,
  motionDamping: 40,

  indexBy: "country"
};

export const defs = [
  {
    id: "dots",
    type: "patternDots",
    background: "inherit",
    color: "#38bcb2",
    size: 4,
    padding: 1,
    stagger: true
  },
  {
    id: "lines",
    type: "patternLines",
    background: "inherit",
    color: "#eed312",
    rotation: -45,
    lineWidth: 6,
    spacing: 10
  }
];

export const fill = [
  {
    match: {
      id: "fries"
    },
    id: "dots"
  },
  {
    match: {
      id: "sandwich"
    },
    id: "lines"
  }
];

export const sliderConfig = {
  sliderBarMinValue: {
    min: -1000,
    max: 0,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderBarMaxValue: {
    min: 0,
    max: 1000,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderPadding: {
    min: 0,
    max: 0.9,
    step: 0.01,
    discrete: true,
    displayMarkers: false
  },
  sliderInnerPadding: {
    min: 0,
    max: 10,
    step: 0.05,
    discrete: true,
    displayMarkers: false
  },
  sliderBorderRadius: {
    min: 0,
    max: 36,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderBorderWidth: {
    min: 0,
    max: 12,
    step: 0.5,
    discrete: true,
    displayMarkers: false
  },
  sliderMarginTop: {
    min: 0,
    max: 320,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderMarginBottom: {
    min: 0,
    max: 320,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderMarginLeft: {
    min: 0,
    max: 320,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderMarginRight: {
    min: 0,
    max: 320,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderLabelSkipWidth: {
    min: 0,
    max: 36,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderLabelSkipHeight: {
    min: 0,
    max: 36,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderMotionStiffness: {
    min: 0,
    max: 300,
    step: 1,
    discrete: true,
    displayMarkers: false
  },
  sliderMotionDamping: {
    min: 0,
    max: 40,
    step: 1,
    discrete: true,
    displayMarkers: false
  }
}