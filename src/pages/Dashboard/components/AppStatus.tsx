import { Badge, Button, Card, InlineGrid, InlineStack } from "@shopify/polaris";
import CustomText from "~/components/CustomText/CustomText";

function AppStatus() {
  return (
    <Card>
      <InlineGrid columns="1fr auto">
        <InlineStack blockAlign="center" gap="200">
          <CustomText type="header">Activate Floatify</CustomText>
          <Badge tone="success">On</Badge>
        </InlineStack>
        <Button>Turn off</Button>
      </InlineGrid>
    </Card>
  );
}

export default AppStatus;
