import styled from "styled-components";

type SeatContainerProps = {
  $isOnline: boolean;
};

type ScoreButtonProps = {
  $bgColor: string;
  disabled: boolean;
};

const borderColor = (isOnline: boolean) => (isOnline ? "#0091f6" : "#C3C7C8");
const backgroundColor = (isOnline: boolean) =>
  isOnline ? "#0091f6" : "#C3C7C8";
const textColor = (isOnline: boolean) => (isOnline ? "black" : "#C3C7C8");

export const SeatContainer = styled.div<SeatContainerProps>`
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ $isOnline }) => borderColor($isOnline)};
`;

export const SeatHeader = styled.div<SeatContainerProps>`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $isOnline }) => backgroundColor($isOnline)};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: white;
  font-size: 20px;
`;

export const SeatName = styled.div<SeatContainerProps>`
  font-size: 22px;
  font-weight: 600;
  color: ${({ $isOnline }) => textColor($isOnline)};
`;

export const SeatFooter = styled.div<SeatContainerProps>`
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ $isOnline }) => borderColor($isOnline)};
  padding: 0px 8px;
`;

export const ScoreButton = styled.button<ScoreButtonProps>`
  all: unset;
  color: white;
  background: ${({ disabled, $bgColor }) => (disabled ? "#C3C7C8" : $bgColor)};
  width: 40px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: 0.3s;
  &:hover {
    filter: ${({ disabled }) => (disabled ? "none" : "brightness(1.1)")};
  }
`;

export const ScoreText = styled.div`
  font-size: 18px;
`;
