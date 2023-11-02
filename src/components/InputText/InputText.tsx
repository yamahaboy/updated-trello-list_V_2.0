import { BaseSyntheticEvent, useRef } from "react";
import "./InputText.css";

interface IProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: BaseSyntheticEvent) => void;
}

export const InputText = ({ placeholder, value, onChange }: IProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: BaseSyntheticEvent) => {
    if (inputRef.current === null) return;
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input
      className="input-text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};
