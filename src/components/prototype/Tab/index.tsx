import { TabButton } from "./style";
import { TabPropsType } from "./type";

const Tab = ({ children, actived, onClick }: TabPropsType) => {
  const handleClick = () => {
    if (actived) return;
    onClick();
  };

  return (
    <TabButton $actived={actived} onClick={handleClick}>
      {children}
    </TabButton>
  );
};

export default Tab;
