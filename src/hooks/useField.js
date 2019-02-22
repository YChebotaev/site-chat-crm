import { useState } from "react";

export const useField = initialValue => {
  const [value, setValue] = useState(initialValue);
  const changeHandler = e => {
    setValue(e.target.value);
  };
  return [value, changeHandler, setValue];
};
