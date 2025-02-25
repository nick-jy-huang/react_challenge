import { ReactNode } from "react";

export type DragPropsType = {
  children?: ReactNode;
  x: number;
  y: number;
  onClose: () => void;
};
