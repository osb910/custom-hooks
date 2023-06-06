import {useState, useCallback} from 'react';

const useToggle = (initialValue = false) => {
  if (typeof initialValue !== 'boolean') {
    console.warn('Invalid type for useToggle');
  }

  const [value, setValue] = useState(initialValue);

  const toggleValue = useCallback(() => {
    setValue(currentValue => !currentValue);
  }, []);

  return [value, toggleValue];
};

export default useToggle;
