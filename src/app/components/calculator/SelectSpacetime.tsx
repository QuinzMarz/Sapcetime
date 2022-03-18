import { h } from 'preact';
import { useRef, useState } from 'preact/compat';
import DatePicker from '../date-picker/DatePicker';
import { formatSpaceTime } from '../../utils/formatSpaceTime';
import useSpaceTime from '../../hooks/useSpaceTime';
import { formatEarthTime } from '../../utils/formatEarthTime';
import {
  Button,
  ButtonContainer,
  ButtonLine,
  ButtonWrapper,
  Converter,
  Heading,
  IndicatorLine,
  Row,
  Section,
  SelectSpacetimeContainer,
  SelectSpacetimeWrapper,
  StyledDate,
  Time,
} from './Calculator.styles';

const SelectSpacetime = () => {
  const { date: spaceTime, updateSpaceTime } = useSpaceTime(undefined, false);
  const { date, earthTime } = useSpaceTime(undefined, true);
  const [converter, setConverter] = useState<boolean>(false);

  const onDateChangeHandler = (dateString: string) => {
    updateSpaceTime(dateString);
  };

  const DisplayConverterHandler = () => {
    setConverter(!converter);
  };

  return (
    <SelectSpacetimeContainer>
      <Section>
        <SelectSpacetimeWrapper>
          <Row>
            <Heading>Current Earth time</Heading>
            <Time>{formatEarthTime(earthTime).time}</Time>
            <StyledDate>{formatEarthTime(earthTime).date}</StyledDate>
          </Row>
          <ButtonContainer>
            <ButtonLine></ButtonLine>
            <ButtonWrapper>
              <Button onClick={DisplayConverterHandler}>{converter ? 'Hide converter' : 'Convert earth time'}</Button>
            </ButtonWrapper>
          </ButtonContainer>
          {converter && (
            <Converter>
              <Row>
                <Heading as={'label'} htmlFor='spaceTime__input'>
                  Calendar converter
                </Heading>
                <DatePicker onChange={onDateChangeHandler} />
              </Row>
              <Row>
                <Heading>Time in space</Heading>
                <Time>{formatSpaceTime(spaceTime).time}</Time>
                <IndicatorLine></IndicatorLine>
                <StyledDate>{formatSpaceTime(spaceTime).date}</StyledDate>
              </Row>
            </Converter>
          )}
        </SelectSpacetimeWrapper>
      </Section>
    </SelectSpacetimeContainer>
  );
};

export default SelectSpacetime;
