import { h } from 'preact';
import styled from 'styled-components';
import * as React from 'preact/compat';

interface DatePickerProps {
  onChange: (value: string) => void;
}

const DatePicker = ({ onChange }: DatePickerProps) => {
  return (
    <Input
      type='datetime-local'
      name='spacetime__input'
      min='2018-06-07T00:00'
      onChange={({ currentTarget }) => onChange(currentTarget.value)}
    />
  );
};

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  padding: 0.625rem 1.25rem;
  border: 2px solid #727681;
  border-radius: 0.75rem;
  background-color: transparent;
  color: #727681;
  font-family: inherit;
  max-width: 230px;

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6;
    filter: invert(0.8);
  }

  &:focus {
    border-color: #5021af;
    outline: none;
  }
`;

export default DatePicker;
