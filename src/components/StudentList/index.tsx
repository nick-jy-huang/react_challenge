import { useState } from "react";
import { useSelector } from "react-redux";

import Title from "./Title";
import ToolBar from "./ToolBar";
import StudentSeat from "./StudentSeat";

import { RootState } from "@/redux/store";

import {
  StudentListContainer,
  StudentListBarContainer,
  StudentSeatContainer,
  ScrollArea,
} from "./style";

export const TAB_MAP = {
  LIST: "list",
  GROUP: "group",
};

const StudentList = () => {
  const classInfo = useSelector((state: RootState) => state?.classInfo?.info);
  const studentList = useSelector(
    (state: RootState) => state?.classStudent?.list
  );

  const allUsers = studentList?.length || 0;
  const onlineUsers = studentList?.filter((item) => item.isOnline)?.length || 0;

  const [tab, setTab] = useState(TAB_MAP.LIST);

  const handleSetTab = (key: string) => setTab(key);

  return (
    <StudentListContainer>
      <StudentListBarContainer>
        <Title
          name={classInfo.title}
          totalUsers={allUsers}
          onlineUsers={onlineUsers}
        />

        <ToolBar tabMap={TAB_MAP} tab={tab} onClick={handleSetTab} />
      </StudentListBarContainer>

      <StudentSeatContainer>
        <ScrollArea>
          <StudentSeat tab={tab} tabMap={TAB_MAP} studentList={studentList} />
        </ScrollArea>
      </StudentSeatContainer>
    </StudentListContainer>
  );
};

export default StudentList;
