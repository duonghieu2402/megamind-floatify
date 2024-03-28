import {
  BlockStack,
  Box,
  Card,
  ChoiceList,
  Divider,
  Grid,
  InlineStack,
  RadioButton,
  RangeSlider,
} from "@shopify/polaris";
import { useCallback, useState } from "react";
import CustomText from "~/components/CustomText/CustomText";

function LayoutSetting() {
  const [rangeValue, setRangeValue] = useState(32);

  const handleRangeSliderChange = useCallback(
    (value: number) => setRangeValue(value),
    []
  );

  return (
    <Card>
      <CustomText type="header">Layout settings</CustomText>
      <Box paddingBlock={"500"} paddingInline={"300"}>
        <BlockStack gap={"500"}>
          <RangeSlider
            label="Button Size"
            value={rangeValue}
            onChange={handleRangeSliderChange}
            output
          />
          <RangeSlider
            label="Space between buttons (px)"
            value={rangeValue}
            onChange={handleRangeSliderChange}
            output
          />
          <div className="slider-and-color-group">
            <div className="slider-container">
              <RangeSlider
                label="Border width (px) & color"
                value={rangeValue}
                onChange={handleRangeSliderChange}
                output
              />
            </div>
            <div className="input-color-container">
              <input type="color" />
            </div>
          </div>
          <div className="group-direction-and-placement">
            <ChoiceList
              title="Direction & placement"
              choices={[
                { label: "Vertical", value: "vertical" },
                { label: "Horizontal", value: "horizontal" },
              ]}
              selected={["vertical"]}
              onChange={() => {}}
            />
            <InlineStack gap={"200"}>
              <div className="group-placement">l</div>
              <div className="group-placement active">m</div>
              <div className="group-placement">r</div>
            </InlineStack>
          </div>
          <RangeSlider
            label="Position"
            value={rangeValue}
            onChange={handleRangeSliderChange}
            output
          />
        </BlockStack>
      </Box>
      <Divider />
      <br />
      <CustomText type="header">Design</CustomText>
      <Box paddingBlock={"500"} paddingInline={"300"}>
        <BlockStack gap={"500"}>
          <div>
            <CustomText type="body">Button style</CustomText>
            <div className="button-group-style-container">
              <div className="button-group-style">1</div>
              <div className="button-group-style">2</div>
              <div className="button-group-style">3</div>
              <div className="button-group-style">4</div>
              <div className="button-group-style">5</div>
              <div className="button-group-style">6</div>
              <div className="button-group-style">7</div>
            </div>
          </div>
          <div className="slider-and-color-group">
            <div className="slider-container">
              <RangeSlider
                label="Padding & background color"
                value={rangeValue}
                onChange={handleRangeSliderChange}
                output
              />
            </div>
            <div className="input-color-container">
              <input type="color" />
            </div>
          </div>
          <RangeSlider
            label="Font size (px)"
            value={rangeValue}
            onChange={handleRangeSliderChange}
            output
          />
        </BlockStack>
      </Box>
      <Divider />
      <br />
      <CustomText type="header">Visibility Options</CustomText>
      <Box paddingBlock={"500"} paddingInline={"300"}>
        <BlockStack gap="200">
          <BlockStack gap="100">
            <CustomText type="body">Device</CustomText>
            <Grid columns={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4 }}>
              <RadioButton label="All" id="all" name="device" />
              <RadioButton label="Desktop" id="desktop" name="device" />
              <RadioButton label="Mobile" id="mobile" name="device" />
            </Grid>
          </BlockStack>
          <BlockStack gap="100">
            <CustomText type="body">Page target</CustomText>
            <Grid columns={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4 }}>
              <RadioButton label="All" id="all" name="page" />
              <RadioButton label="Desktop" id="desktop" name="page" />
              <RadioButton label="Mobile" id="mobile" name="page" />
            </Grid>
          </BlockStack>
          <BlockStack gap="100">
            <CustomText type="body">Display time</CustomText>
            <Grid columns={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4 }}>
              <RadioButton label="All" id="all" name="display" />
              <RadioButton label="Desktop" id="desktop" name="display" />
            </Grid>
          </BlockStack>
          <BlockStack gap="100">
            <RangeSlider
              label="Show after scrolling (px)"
              value={rangeValue}
              onChange={handleRangeSliderChange}
              output
            />
          </BlockStack>
        </BlockStack>
      </Box>
    </Card>
  );
}

export default LayoutSetting;
