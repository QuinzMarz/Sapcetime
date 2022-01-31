import { Fragment, h } from 'preact';
import { StyleSheetManager } from 'styled-components';
import Calculator from './calculator/Calculator';
import * as React from 'preact/compat';

const App = () => {
  return (
    <Fragment>
      {/* @ts-ignore */}
      <StyleSheetManager target={document.querySelector('#spacetime')?.shadowRoot as ShadowRoot}>
        <Calculator />
      </StyleSheetManager>
    </Fragment>
  );
};

export default App;
