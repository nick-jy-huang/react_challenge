import { Close } from "./style";

const CloseButton = ({ onClick }: { onClick: () => void }) => {
  return <Close onClick={onClick}>X</Close>;
};

export default CloseButton;
