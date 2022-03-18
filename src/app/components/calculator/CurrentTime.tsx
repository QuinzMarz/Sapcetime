import { h } from 'preact';
import { Row, Section } from './Calculator.styles';
import CurrentSpaceTime from './CurrentSpaceTime';

const CurrentTime = () => {
  return (
    <Section>
      <Row>
        <CurrentSpaceTime />
      </Row>
    </Section>
  );
};

export default CurrentTime;
