import { studentType } from "@/api/studentList";
import {
  SeatContainer,
  SeatHeader,
  SeatName,
  SeatFooter,
  ScoreButton,
  ScoreText,
} from "./style";

import {
  addStudentScore,
  minusStudentScore,
} from "@/redux/slices/classStudent";

import { useDispatch } from "react-redux";

const Seat = ({ data }: { data: studentType }) => {
  const dispatch = useDispatch();

  const { id, seat, name, score, isOnline } = data;
  return (
    <SeatContainer $isOnline={isOnline}>
      <SeatHeader $isOnline={isOnline}>
        {seat > 9 ? seat : `0${seat}`}
      </SeatHeader>
      <SeatName $isOnline={isOnline}>{name}</SeatName>
      <SeatFooter $isOnline={isOnline}>
        <ScoreButton
          $bgColor="#EF486A"
          disabled={!isOnline}
          onClick={() => dispatch(minusStudentScore(id))}
        >
          - 1
        </ScoreButton>
        <ScoreText>{score}</ScoreText>
        <ScoreButton
          $bgColor="#78C944"
          disabled={!isOnline}
          onClick={() => dispatch(addStudentScore(id))}
        >
          + 1
        </ScoreButton>
      </SeatFooter>
    </SeatContainer>
  );
};

export default Seat;
