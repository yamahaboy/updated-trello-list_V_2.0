import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 15px;
`;

export const SheetStyles = {
  display: "flex",
  justifyContent: "center",
  margin: "20rem auto",
  height: "10rem",
  borderRadius: "10px",
  boxShadow: "0 4px 6px #9a43b5aa",
};
