import styled from "styled-components";


export const TodoList = styled.div`
  width: 40rem;
  height: auto;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: rgb(207, 204, 204, 0.3);
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width:100%
`;
export const ListTitle = styled.div`
  width: 30%;
  margin-right: 10px;
  font-size: 2rem;
  margin-bottom: 5px;
  margin: 0;
  padding: 0;
`;

export const ButtonBlock = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
`