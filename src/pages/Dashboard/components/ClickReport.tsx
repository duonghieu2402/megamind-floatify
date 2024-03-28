import { Box, Card, IndexTable, InlineGrid } from "@shopify/polaris";
import { useState } from "react";
import CustomText from "~/components/CustomText/CustomText";
import CustomDatePicker from "~/components/DatePicker/CustomDatePicker";
import { DATE_RANGE } from "~/components/DatePicker/types/constant";

const SAMPLE_CLICK = [
  { button: "icon", group: "test", type: "whatsapp", click: 10 },
];

function ClickReport() {
  const [selectedDate] = useState(DATE_RANGE[1]); // Để tạm chờ api rồi tống vào redux

  const row = SAMPLE_CLICK.map((button, index) => (
    <IndexTable.Row id={`${index}`} position={index} key={index}>
      <IndexTable.Cell>{index + 1}</IndexTable.Cell>
      <IndexTable.Cell>{button.button}</IndexTable.Cell>
      <IndexTable.Cell>{button.group}</IndexTable.Cell>
      <IndexTable.Cell>{button.type}</IndexTable.Cell>
      <IndexTable.Cell>{button.click}</IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Card padding="400">
      <Box paddingBlockEnd={"400"}>
        <InlineGrid columns="1fr auto" alignItems="center">
          <CustomText type="header">Click Report</CustomText>
          <CustomDatePicker
            setTitleBtn={() => {}}
            start={selectedDate.period.start}
            end={selectedDate.period.end}
            titleBtn={selectedDate.title}
          />
        </InlineGrid>
      </Box>
      <IndexTable
        itemCount={1}
        headings={[
          { title: "#" },
          { title: "Button" },
          { title: "Group" },
          { title: "Type" },
          { title: "Click" },
        ]}
        selectable={false}
      >
        {row}
      </IndexTable>
    </Card>
  );
}

export default ClickReport;
