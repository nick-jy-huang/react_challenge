import styled from "styled-components";

export const JoinClassContainer = styled.div`
  width: 720px;
  height: 840px;
  background: #f6f6f6;
  border-radius: 16px;
  padding: 40px;
  padding-top: 70px;
  color: black;
  text-align: left;
`;

export const BackTo = styled.div`
  width: 200px;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 18px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 18px;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 55px;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 18px;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const QRContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
`;

export const QRBox = styled.div`
  min-width: 600px;
  min-height: 600px;
  padding: 20px;
  background: white;
  border-radius: 10px;
`;

export const VersionText = styled.div`
  text-align: center;
  font-size: 16px;
`;
