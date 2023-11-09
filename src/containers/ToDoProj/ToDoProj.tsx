import FilterTextField from "../FilterTextField/FilterTextField";
import PostsList from "../PostsList/PostsList";
import { ToDoForm } from "../ToDoForm/ToDoForm";
import { ToDoList } from "../ToDoList/ToDoList";
import UserList from "../UsersList/UsersList";
import {
  StyledApp,
  MainContentContainer,
  ListsContainer,
  FilterStylesContainer,
} from "./styles";

const ToDoProj = () => {
  return (
    <StyledApp>
      <FilterStylesContainer>
        <FilterTextField />
      </FilterStylesContainer>
      <MainContentContainer>
        <ListsContainer>
          <ToDoForm />
          <ToDoList />
        </ListsContainer>
        <ListsContainer>
          <UserList />
          <PostsList />
        </ListsContainer>
      </MainContentContainer>
    </StyledApp>
  );
};

export default ToDoProj;
