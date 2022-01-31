import { h } from 'preact';
import { useRef } from 'preact/compat';
import DatePicker from '../date-picker/DatePicker';
import { formatSpaceTime } from '../../utils/formatSpaceTime';
import useSpaceTime from '../../hooks/useSpaceTime';
import { Heading, Row, Section, Time } from './Calculator.styles';

const SelectSpacetime = () => {
  const { date: spaceTime, updateSpaceTime } = useSpaceTime(undefined, false);
  const dateSelected = useRef<boolean>(false);

  const onDateChangeHandler = (dateString: string) => {
    dateSelected.current = true;

    updateSpaceTime(dateString);
  };

  return (
    <Section>
      <Row>
        <Heading as={'label'} htmlFor='spaceTime__input'>
          Provide time on Earth
        </Heading>
        <DatePicker onChange={onDateChangeHandler} />
      </Row>

      {dateSelected.current && (
        <Row>
          <Heading>Time in space</Heading>
          <Time>{formatSpaceTime(spaceTime)}</Time>
        </Row>
      )}
    </Section>
  );
};

export default SelectSpacetime;
