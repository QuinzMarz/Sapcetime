import styled from 'styled-components';

export const Widget = styled.article`
  font-family: 'Roboto', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    'Liberation Sans', sans-serif;
  background-color: #ffffff;
  border-radius: 0.25rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.15);
  text-align: left;

  * {
    box-sizing: border-box;
  }
`;

export const WidgetBody = styled.div`
  padding: 0 1.25rem;
`;

export const Header = styled.header`
  padding: 0.25rem 1.25rem;
  text-align: center;
  background-color: #283593;
  border-radius: 0.25rem 0.25rem 0 0;
`;

export const MainHeading = styled.h2`
  color: #ffffff;
`;

export const Section = styled.div`
  padding: 1.25rem 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Row = styled.div`
  padding: 0.625rem 0;
`;

export const Heading = styled.h3`
  display: block;
  margin: 0 0 0.625rem;
  font-weight: 700;
  font-size: 16px;
`;

export const Time = styled.p`
  margin: 0;
  font-size: 15px;
`;
