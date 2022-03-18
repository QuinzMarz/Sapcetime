import { Fragment, h } from 'preact';
import { StyleSheetManager } from 'styled-components';
import Calculator from './calculator/Calculator';
import * as React from 'preact/compat';
import { GlobalStyle } from '../styles/GlobalStyles';

interface AppProps {
  isLight?: boolean;
  container: HTMLElement;
}

const App: React.FC<AppProps> = ({ isLight, container }) => {
  return (
    <Fragment>
      <GlobalStyle />
      {/* @ts-ignore */}
      <StyleSheetManager target={container?.shadowRoot as ShadowRoot}>
        <Calculator isLight={isLight} />
      </StyleSheetManager>
    </Fragment>
  );
};

export default App;
