import {
  Badge,
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  IndexTable,
  InlineGrid,
} from "@shopify/polaris";
import { EditMinor, ViewMinor, AnalyticsMinor } from "@shopify/polaris-icons";
import { useNavigate } from "react-router-dom";
import CustomText from "~/components/CustomText/CustomText";

const SAMPLE_GB = [
  {
    name: "Untitled",
    isActive: true,
    description: "Home",
    createAt: "2023-11-11",
  },
  {
    name: "Untitled",
    isActive: false,
    description: "Home",
    createAt: "2023-11-11",
  },
];

function GroupButtons() {
  const navigate = useNavigate();
  const handleCreateButtonGroup = () => {
    navigate("/group-button");
  };

  const row = SAMPLE_GB.map((button, index) => (
    <IndexTable.Row id={`${index}`} position={index} key={index}>
      <IndexTable.Cell>{button.name}</IndexTable.Cell>
      <IndexTable.Cell>
        {button.isActive ? (
          <Badge
            tone="success"
            progress="complete"
            size="medium"
            children="On"
          />
        ) : (
          <Badge
            tone="critical"
            progress="incomplete"
            size="medium"
            children="Off"
          />
        )}
      </IndexTable.Cell>
      <IndexTable.Cell>{button.description}</IndexTable.Cell>
      <IndexTable.Cell>{button.createAt}</IndexTable.Cell>
      <IndexTable.Cell>
        <div className="hidden-actions-cell">
          <ButtonGroup>
            <Button icon={EditMinor} />
            <Button icon={ViewMinor} />
            <Button icon={AnalyticsMinor} />
          </ButtonGroup>
        </div>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Card padding="0">
      <Box padding={"400"}>
        <InlineGrid columns="1fr auto">
          <BlockStack gap="200">
            <CustomText type="header">Group Buttons</CustomText>
            <CustomText type="sub">
              Choose a list group below and edit
            </CustomText>
          </BlockStack>
          <div>
            <Button variant="primary" onClick={handleCreateButtonGroup}>
              Add New Group
            </Button>
          </div>
        </InlineGrid>
      </Box>
      <IndexTable
        itemCount={1}
        headings={[
          { title: "Name" },
          { title: "Status" },
          { title: "Description" },
          { title: "Created at" },
          { title: "Actions", hidden: true },
        ]}
        selectable={false}
      >
        {row}
      </IndexTable>
    </Card>
  );
}

export default GroupButtons;
