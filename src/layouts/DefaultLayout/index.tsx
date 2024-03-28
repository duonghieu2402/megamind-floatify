import { Frame } from "@shopify/polaris";
import { PropsWithChildren } from "react";

function DefaultLayout({ children }: PropsWithChildren) {
  return <Frame>{children}</Frame>;
}

export default DefaultLayout;
