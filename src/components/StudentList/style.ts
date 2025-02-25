import styled from "styled-components";

export const StudentListContainer = styled.div`
  width: 960px;
  height: 840px;
  background: #ebebeb;
  border-radius: 16px;
  padding-top: 90px;
`;

export const StudentListBarContainer = styled.div`
  background: #ebebeb;
  height: 160px;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StudentSeatContainer = styled.div`
  box-shadow: 0px -5px 2px #d3d3d3;
  background: white;
  width: 100%;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
`;

export const ScrollArea = styled.div`
  width: 100%;
  height: 800px;
  margin: 0px 48px;
  max-height: calc(100% - 70px);
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border: 0 solid transparent;
    background-color: #d6d6d6;
    background-clip: content-box;
    border-radius: 8px;
  }
`;
