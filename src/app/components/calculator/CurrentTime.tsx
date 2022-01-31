import { h } from 'preact';
import { formatSpaceTime } from '../../utils/formatSpaceTime';
import useSpaceTime from '../../hooks/useSpaceTime';
import { formatEarthTime } from '../../utils/formatEarthTime';
import { Heading, Row, Section, Time } from './Calculator.styles';

const CurrentTime = () => {
  const { date, earthTime } = useSpaceTime(undefined, true);

  return (
    <Section>
      <Row>
        <Heading>Current Earth Time</Heading>
        <Time>{formatEarthTime(earthTime)}</Time>
      </Row>
      <Row>
        <Heading>Current Space Time</Heading>
        <Time>{formatSpaceTime(date)}</Time>
      </Row>
    </Section>
  );
};

export default CurrentTime;
