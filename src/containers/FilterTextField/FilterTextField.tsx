import React from "react";
import TextField from "@mui/material/TextField";


type FilterTextFieldType = {
    inputValue: string
    onInputChange: (value: string) => void;
}

const FilterTextField: React.FC<FilterTextFieldType> = (props) => {
    const {inputValue, onInputChange} = props;
  return (
    <TextField
      label="Filter"
      variant="outlined"
      value={inputValue}
      onChange={(e) => onInputChange(e.target.value)}
      fullWidth
    />
  );
};

export default FilterTextField;
