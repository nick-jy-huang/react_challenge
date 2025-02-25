import { Copy } from "./style";
import copyimage from "@/assets/copy.png";

const CopyButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Copy onClick={onClick}>
      <img
        src={copyimage}
        alt="copy"
        style={{
          width: "24px",
          filter: "invert(1)",
        }}
      />
    </Copy>
  );
};

export default CopyButton;
