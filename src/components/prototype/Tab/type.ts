import { ReactNode } from "react";

export type TabPropsType = {
  children?: ReactNode;
  actived: boolean;
  onClick: () => void;
};
