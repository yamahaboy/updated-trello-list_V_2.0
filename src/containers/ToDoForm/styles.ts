import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  width: 40rem;
  height: auto;
  
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  background-color: rgb(207, 204, 204, 0.3);
  margin-bottom: 10px;
`;

export const FormTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  gap: 10px;
`;

export const Error = styled.div`
  color: red;
`;


export const StyledFormInput = styled.input`
  resize: none;
  height: 2rem;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  font-size: 1rem;`