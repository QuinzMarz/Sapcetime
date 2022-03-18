import styled from 'styled-components';

interface StyledDate {
  big?: boolean;
}

export const Widget = styled.article`
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans',
    sans-serif;
  background-color: #030201;
  color: #727681;
  border-radius: 0.25rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  * {
    box-sizing: border-box;
  }
`;

export const WidgetBody = styled.div`
  text-align: left;
`;

export const Header = styled.header`
  padding: 0.25rem 1.25rem;
  text-align: center;
  background-color: #121212;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  margin: 0 auto;
  top: 0;
  white-space: nowrap;
  transform: translateY(-50%);
`;

export const MainHeading = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-style: normal;
  font-weight: normal;
  color: #727681;
  margin: 0;
`;

export const Section = styled.div`
  padding: 1.25rem 0 0 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Row = styled.div`
  padding: 0.625rem 0;
`;

export const Heading = styled.h3`
  display: block;
  margin: 0 0 0.875rem;
  font-weight: 700;
  font-size: 16px;
`;

export const Time = styled.p`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  font-family: 'Orbitron', sans-serif;
  color: #fff;
`;

export const Button = styled.button`
  background-color: #030201;
  border: 2px solid #fff;
  text-transform: uppercase;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin: 3rem auto;
  padding: 0 1.25rem;
  width: 100%;
  text-align: center;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 2rem;
  background-color: #030201;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const ButtonLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #282828;
`;

export const StyledDate = styled.p`
  color: #727681;
  font-size: ${(p: StyledDate) => (p.big ? ' 1.125rem' : '0.875rem')};
  letter-spacing: 1px;
  margin: 0.875rem 0 0 0;
`;

export const SelectSpacetimeContainer = styled.div`
  & ${Section} {
    padding: 0;
  }
`;

export const SelectSpacetimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > ${Row} {
    width: 100%;
    text-align: center;
  }
`;

export const Converter = styled.div`
  width: 100%;
  background-color: #131313;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 1rem;
  margin-top: 0.5rem;

  & ${Row} {
    flex: 0 0 40%;
    text-align: center;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: start;
    justify-content: center;

    & ${Row} {
      padding: 0 2rem;
      margin-bottom: 0;
      text-align: start;
    }
  }
`;

export const IndicatorLine = styled.div`
  width: 100%;
  height: 2px;
  background: rgb(80, 33, 175);
  background: linear-gradient(90deg, rgba(80, 33, 175, 1) 32%, rgba(19, 19, 19, 1) 100%);
`;
