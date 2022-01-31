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
  padding: 0.5rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.5);

  &:focus {
    border-color: #283593;
    outline: none;
  }
`;

export default DatePicker;
