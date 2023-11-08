import styled from "styled-components";

export const Title = styled.div`
  margin-bottom: 10px;
`;

export const PostListStyles = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgb(207, 204, 204, 0.3)",
  borderRadius: "10px",
  border: "1px solid gray",
  width: "20rem",
  height: "24.5rem",
  overflow: "auto",
  alignItems: "center",
};

export const PostItemStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  fontSize: "20px",
  resize: "none",
  borderRadius: "5px",
  border: "none",
  color: "rgb(74, 71, 71)",
  backgroundColor: "#fff",
  marginTop: "10px",
  marginBottom: "10px",
  padding: "10px",
};
