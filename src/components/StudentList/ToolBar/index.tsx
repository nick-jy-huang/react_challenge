import { ToolBarWrap } from "./style";
import Tab from "@/components/prototype/Tab";
import Menu from "@/components/prototype/menu";

const ToolBar = ({
  tabMap,
  tab,
  onClick,
}: {
  tabMap: object;
  tab: string;
  onClick: (key: string) => void;
}) => {
  return (
    <ToolBarWrap>
      <div>
        {Object.entries(tabMap).map(([key, value]) => (
          <Tab key={key} actived={tab === value} onClick={() => onClick(value)}>
            {key === "LIST" ? "Student List" : "Group"}
          </Tab>
        ))}
      </div>
      <div>
        <Menu />
      </div>
    </ToolBarWrap>
  );
};

export default ToolBar;
