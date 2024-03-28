import { BlockStack, Box, Card, Grid, RadioButton } from "@shopify/polaris";
import CustomText from "~/components/CustomText/CustomText";
import Editor from "@monaco-editor/react";

function AdvancedSetting() {
  return (
    <Card>
      <CustomText type="header">Advanced setting</CustomText>
      <Box paddingBlock={"500"} paddingInline={"300"}>
        <BlockStack gap="200">
          <BlockStack gap="100">
            <CustomText type="body">Google Analytics</CustomText>
            <Grid columns={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4 }}>
              <RadioButton label="Enable" id="enable" name="ga" value="true" />
              <RadioButton label="Disable" id="disable" name="ga" value="false" />
            </Grid>
          </BlockStack>
          <BlockStack gap="100">
            <CustomText type="body">Facebook Pixel</CustomText>
            <Grid columns={{ xs: 1, sm: 3, md: 4, lg: 4, xl: 4 }}>
              <RadioButton label="Enable" id="enable" name="fb" value="true" />
              <RadioButton label="Disable" id="disable" name="fb" value="false" />
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
            <CustomText type="body">Custom CSS</CustomText>
            <Editor defaultLanguage="css" height="10rem" theme="vs-dark" />
          </BlockStack>
        </BlockStack>
      </Box>
    </Card>
  );
}

export default AdvancedSetting;
