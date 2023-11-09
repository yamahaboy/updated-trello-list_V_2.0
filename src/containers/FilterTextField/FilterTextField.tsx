import React, { BaseSyntheticEvent, useState } from "react";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../../store/reducers/store";
import { setInputValueFilter } from "../../store/reducers/toDoReducer/Actions";

const FilterTextField: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const value = e.target.value;
    setInputValue(value);
    dispatch(setInputValueFilter(value));
  };

  return (
    <TextField
      label="Filter"
      variant="outlined"
      value={inputValue}
      onChange={handleInputChange}
      sx={{ width: "75%", marginTop: ".5rem" }}
    />
  );
};

export default FilterTextField;
