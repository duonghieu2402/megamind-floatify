import { Banner, BlockStack, Box, Button, ButtonGroup, Card, Icon } from "@shopify/polaris";
import CustomText from "~/components/CustomText/CustomText";
import { PhoneMajor, EditMinor, DeleteMinor, MobileVerticalDotsMajor } from "@shopify/polaris-icons";

const BUTTONS = [
  {
    name: "Whatsapp",
    title: "0123456789",
    icon: PhoneMajor,
  },
  {
    name: "Phone",
    title: "0123456789",
    icon: PhoneMajor,
  },
];

function ListButton() {
  return (
    <Card>
      <CustomText type="header">List buttons</CustomText>
      <Box paddingBlock="400">
        <Banner title="Note">
          The Buttons: Sms, Phone, Viber, Line only work when clicking on them on mobile devices!
        </Banner>
      </Box>
      <BlockStack>
        <CustomText type="body">Drag and Drop to Rearrange Order</CustomText>
        <BlockStack>
          {BUTTONS.map((button, index) => (
            <div className="button-list" key={index}>
              <div className="button-move">
                <Icon source={MobileVerticalDotsMajor} tone="subdued" />
              </div>
              <div>
                <Icon source={button.icon} tone="base" />
              </div>
              <div>
                <CustomText type="header">{button.name}</CustomText>
                <CustomText type="sub">{button.title}</CustomText>
              </div>
              <div className="button-actions">
                <ButtonGroup>
                  <Button icon={EditMinor} />
                  <Button icon={DeleteMinor} />
                </ButtonGroup>
              </div>
            </div>
          ))}
        </BlockStack>
      </BlockStack>
    </Card>
  );
}

export default ListButton;
