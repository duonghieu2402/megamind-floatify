import { BlockStack, Layout, Page } from "@shopify/polaris";
import { GroupButtonStyled } from "./styled";
import LayoutSetting from "./components/LayoutSetting";
import ListButton from "./components/ListButton";
import AdvancedSetting from "./components/AdvancedSetting";

function GroupButton() {
  return (
    <GroupButtonStyled>
      <Page title="Group 1" backAction={{ content: "Dashboard", url: "/" }}>
        <Layout>
          <Layout.Section variant="oneHalf">
            <LayoutSetting />
          </Layout.Section>
          <Layout.Section variant="oneHalf">
            <BlockStack gap="400">
              <ListButton />
              <AdvancedSetting />
            </BlockStack>
          </Layout.Section>
        </Layout>
      </Page>
    </GroupButtonStyled>
  );
}

export default GroupButton;
