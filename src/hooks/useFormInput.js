import { useState } from 'react';

export function useFormInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);

  const handleChange = event => {
    setValue(event.target.value);
    setIsDirty(true);

    if (error && event.target.checkValidity()) {
      setError(null);
    }
  };

  const handleInvalid = event => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };

  const handleBlur = event => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };

  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid,
  };
}
