import { useState, ChangeEvent } from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return {
    value,
    setValue,
    handleChange,
  };
};
