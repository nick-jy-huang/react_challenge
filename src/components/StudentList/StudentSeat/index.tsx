import Seat from "@/components/prototype/Seat";
import SeatGroup from "@/components/prototype/SeatGroup";
import Skeleton from "@/components/prototype/Skeleton";

import { studentType } from "@/api/studentList";

const StudentSeat = ({
  tab,
  tabMap,
  studentList,
}: {
  tab: string;
  tabMap: {
    LIST: string;
    GROUP: string;
  };
  studentList: studentType[] | null;
}) => {
  if (!studentList) {
    return (
      <div
        style={{
          width: "99%",
          height: "99%",
        }}
      >
        <Skeleton width={"100%"} height={"100%"} />
      </div>
    );
  }

  return tab === tabMap.LIST ? (
    <>
      {studentList.map((item) => (
        <Seat key={item.id} data={item} />
      ))}
    </>
  ) : (
    <SeatGroup items={studentList} />
  );
};

export default StudentSeat;
