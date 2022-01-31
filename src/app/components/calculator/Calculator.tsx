import { h, VNode } from 'preact';
import { Header, MainHeading, Widget, WidgetBody } from './Calculator.styles';
import CurrentTime from './CurrentTime';
import SelectSpacetime from './SelectSpacetime';

const Calculator = (): VNode => {
  return (
    <Widget>
      <Header>
        <MainHeading>Spacetime Clock</MainHeading>
      </Header>

      <WidgetBody>
        <CurrentTime />

        <SelectSpacetime />
      </WidgetBody>
    </Widget>
  );
};

export default Calculator;
