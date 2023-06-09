import {useReducer, useCallback} from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  const actions = {
    INPUT: () => ({value: action.value, isTouched: state.isTouched}),
    BLUR: () => ({isTouched: true, value: state.value}),
    RESET: () => ({value: '', isTouched: false}),
    '': () => initialInputState,
  };
  return actions[action.type]();
};

const useInput = validateValue => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const handleValueChange = useCallback(evt => {
    dispatchInput({type: 'INPUT', value: evt.target.value});
  }, []);

  const handleInputBlur = useCallback(() => {
    dispatchInput({type: 'BLUR'});
  }, []);

  const reset = useCallback(() => {
    dispatchInput({type: 'RESET'});
  }, []);

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    handleValueChange,
    handleInputBlur,
    reset,
  };
};

export default useInput;
