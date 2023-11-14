import FilterTextField from "../FilterTextField/FilterTextField";
import FullUserInfo from "../FullUserInfo/FullUserInfo";
import UserPopover from "../Popover/Popover";
import PostsList from "../PostsList/PostsList";
import { ToDoForm } from "../ToDoForm/ToDoForm";
import { ToDoList } from "../ToDoList/ToDoList";
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
        <UserPopover />
      </FilterStylesContainer>
      <MainContentContainer>
        <ListsContainer>
          <ToDoForm />
          <ToDoList />
        </ListsContainer>
        <ListsContainer>
          <FullUserInfo />

          <PostsList />
        </ListsContainer>
      </MainContentContainer>
    </StyledApp>
  );
};

export default ToDoProj;
