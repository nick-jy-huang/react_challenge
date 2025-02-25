import Seat from "@/components/prototype/Seat";
import { studentType } from "@/api/studentList";

import {
  GroupListContainer,
  GroupContainer,
  GroupLabel,
  SeatContainer,
} from "./style";

const SeatGroup = ({ items }: { items: studentType[] }) => {
  const groupList = items.reduce((acc, item) => {
    if (!acc[item.groupId]) {
      acc[item.groupId] = [];
    }
    acc[item.groupId].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <GroupListContainer>
      {Object.keys(groupList).map((id) => (
        <GroupContainer key={id}>
          <GroupLabel>Group {id}</GroupLabel>
          <SeatContainer>
            {groupList[id].map((item) => (
              <Seat key={item.id} data={item} />
            ))}
          </SeatContainer>
        </GroupContainer>
      ))}
    </GroupListContainer>
  );
};

export default SeatGroup;
