import { h, VNode } from 'preact';
import React from 'preact/compat';
import { Header, MainHeading, Widget, WidgetBody } from './Calculator.styles';
import CurrentTime from './CurrentTime';
import SelectSpacetime from './SelectSpacetime';

interface CalculatorProps {
  isLight?: boolean;
}

const Calculator: React.FC<CalculatorProps> = ({ isLight }): VNode => {
  return (
    <Widget>
      <Header>
        <MainHeading>Current space Time</MainHeading>
      </Header>

      <WidgetBody>
        <CurrentTime />
        {!isLight && <SelectSpacetime />}
      </WidgetBody>
    </Widget>
  );
};

export default Calculator;
