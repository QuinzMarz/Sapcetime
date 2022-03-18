import { h } from 'preact';
import useSpaceTime from '../../hooks/useSpaceTime';
import { formatSpaceTime, padDateNum } from '../../utils/formatSpaceTime';
import styled from 'styled-components';
import { Row, StyledDate } from './Calculator.styles';
import { useEffect, useState } from 'preact/hooks';

const CurrentSpaceTime = () => {
  const { date } = useSpaceTime(undefined, true);
  const [progressBg, setProgressBg] = useState('');

  useEffect(() => {
    setProgressBg(calcProgressBg());
  }, [date.minute]);

  const calcProgressBg = () => {
    const hourNumber: number = Number(`${date.hour}.${date.minute}`);

    const progressDeg: string = `${(360 * (hourNumber / 100)).toFixed(2)}deg`;

    const progressBackground: string = `conic-gradient(from 293deg, #5021af ${progressDeg} , #282828 0deg)`;

    return progressBackground;
  };

  return (
    <Wrapper>
      <ClockContainer actualProgressBg={progressBg}>
        <Clock>
          <SVG viewBox='0 0 56 18'>
            <text
              x='50%'
              y='54%'
              dominantBaseline='middle'
              textAnchor='middle'
              fontSizeAdjust='0.58'
              fill={'currentColor'}
              fontFamily={'Orbitron'}
            >
              {padDateNum(date.hour)} : {padDateNum(date.minute)} : {padDateNum(date.second)}
            </text>
          </SVG>
        </Clock>
      </ClockContainer>
      <Row>
        <StyledDate>Day | Month | Year</StyledDate>
        <StyledDate big>{formatSpaceTime(date).date}</StyledDate>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 1.25rem;
  text-align: center;
  padding-top: 1rem;
`;

const ClockContainer = styled.div.attrs((p: { actualProgressBg: string }) => p)`
  margin: 0 auto;
  max-width: 570px;
  padding: 0.5rem;
  border-radius: 1rem;
  background: ${(p) => p.actualProgressBg};
`;

const SVG = styled.svg`
  display: inline-block;
  margin: 0 auto;
  line-height: 1;
`;

const Clock = styled.div`
  background-color: #030201;
  border-radius: 10px;
  line-height: 1;
  font-size: 8px;
  color: #ffffff;
  margin: 0;
  text-align: center;
`;

export default CurrentSpaceTime;
