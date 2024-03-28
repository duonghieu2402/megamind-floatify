import { ReactNode } from "react";

export interface CustomTextProps {
  type: "header" | "body" | "sub";
  children: ReactNode;
}
