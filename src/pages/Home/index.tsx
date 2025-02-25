import { useEffect, useState, lazy } from "react";
import { Container, DemoButton } from "./style";

import Drag from "@/components/prototype/Drag";
const JoinClass = lazy(() => import("@/components/JoinClass"));
const StudentList = lazy(() => import("@/components/StudentList"));

import { ApiGetClassInfo } from "@/api/classInfo";
import { ApiGetStudentList } from "@/api/studentList";

import { useDispatch } from "react-redux";
import { modifyInfo } from "@/redux/slices/classInfo";
import { modifyStudentList } from "@/redux/slices/classStudent";

const roomId = "X58E9647";

const Home = () => {
  const dispatch = useDispatch();

  const [panelMap, setPanelMap] = useState({
    showJoinClass: true,
    showStudentList: true,
  });

  const { showJoinClass, showStudentList } = panelMap;

  const handleTogglePanel = (type: string, toggle: boolean) => {
    setPanelMap((prev) => ({
      ...prev,
      [type]: toggle,
    }));
  };

  useEffect(() => {
    async function initData() {
      try {
        const [infoData, studentListData] = await Promise.all([
          ApiGetClassInfo(roomId),
          ApiGetStudentList(roomId),
        ]);

        if (infoData) {
          dispatch(modifyInfo(infoData));
        }
        if (studentListData) {
          dispatch(modifyStudentList(studentListData));
        }
      } catch (error) {
        console.log("error:", error);
      }
    }

    initData();
  }, [dispatch]);

  return (
    <Container>
      {!showJoinClass && (
        <DemoButton onClick={() => handleTogglePanel("showJoinClass", true)}>
          Show Join Class
        </DemoButton>
      )}
      {!showStudentList && (
        <DemoButton onClick={() => handleTogglePanel("showStudentList", true)}>
          Show Student List
        </DemoButton>
      )}

      {showJoinClass && (
        <Drag
          x={50}
          y={80}
          onClose={() => handleTogglePanel("showJoinClass", false)}
        >
          <JoinClass />
        </Drag>
      )}
      {showStudentList && (
        <Drag
          x={900}
          y={80}
          onClose={() => handleTogglePanel("showStudentList", false)}
        >
          <StudentList />
        </Drag>
      )}
    </Container>
  );
};

export default Home;
