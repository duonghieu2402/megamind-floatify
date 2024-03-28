import { Text } from "@shopify/polaris";
import { CustomTextProps } from "./types";

function CustomText({ type, children }: CustomTextProps) {
  if (type === "header")
    return (
      <Text as="h5" variant="headingMd" breakWord={false}>
        {children}
      </Text>
    );
  if (type === "sub")
    return (
      <Text as="p" variant="bodyMd" tone="subdued">
        {children}
      </Text>
    );
  return (
    <Text as="p" variant="bodyMd">
      {children}
    </Text>
  );
}

export default CustomText;
