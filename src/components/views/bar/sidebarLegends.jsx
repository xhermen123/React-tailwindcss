import React from 'react';
import Slider from "../../../components/controls/slider";
import SelectMenu from "../../controls/selectmenu";
import RadioLegendDirection from "../../controls/configs/legendDirectionConfigRADIO";
import Switch from "../../../components/controls/switch";

export default class SideBarLegends extends React.Component {
  render() {
    const { legend, legendConfig, updateLegend, itemDirectionConfig } = this.props;
    return (
      <div>
        <label>Legend Position</label>
        <br />
        <SelectMenu
          value={legend.anchor}
          options={legendConfig.position}
          onChange={anchor => updateLegend({ anchor })}
        />
        <br />
        <br />
        <label>Legend Direction</label>
        <RadioLegendDirection
          directions={legendConfig.direction}
          defaultMode={legend.direction}
          onChange={direction => updateLegend({ direction })}
        />

        <br />
        <br />
        <label>Justify</label>
        <br />
        <Switch
          value={legend.justify}
          checked={legend.justify}
          onChange={justify => updateLegend({ justify })}
        />
        <br />
        <br />
        <label>Translate X</label>
        <br />
        <Slider
          value={legend.translateX}
          onInput={translateX => updateLegend({ translateX })}
          {...legendConfig.slidertranslateX}
        />

        <br />
        <br />
        <label>Translate Y</label>
        <br />
        <Slider
          value={legend.translateY}
          onInput={translateY => updateLegend({ translateY })}
          {...legendConfig.slidertranslateY}
        />

        <br />
        <br />
        <label>Item Width</label>
        <br />
        <Slider
          value={legend.itemWidth}
          onInput={itemWidth => updateLegend({ itemWidth })}
          {...legendConfig.slideritemWidth}
        />
        <br />
        <br />
        <label>Item Height</label>
        <br />
        <Slider
          value={legend.itemHeight}
          onInput={itemHeight => updateLegend({ itemHeight })}
          {...legendConfig.slideritemHeight}
        />
        <br />
        <br />
        <label>Item Spacing</label>
        <br />
        <Slider
          value={legend.itemsSpacing}
          onInput={itemsSpacing => updateLegend({ itemsSpacing })}
          {...legendConfig.slideritemSpacing}
        />
        <br />
        <br />
        <label>Symbol Size</label>
        <br />
        <Slider
          value={legend.symbolSize}
          onInput={symbolSize => updateLegend({ symbolSize })}
          {...legendConfig.slidersymbolSize}
        />
        <br />
        <br />
        <label>Item Direction</label>
        <br />
        <SelectMenu
          value={legend.itemDirection}
          options={itemDirectionConfig.itemDirection}
          onChange={itemDirection => updateLegend({ itemDirection })}
        />
      </div>
    )
  }
}