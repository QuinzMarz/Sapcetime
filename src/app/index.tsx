import App from './components/App';

import { h, render } from 'preact';

// app shadow root

const appRoot = document.querySelector('#spacetime') as HTMLElement;

appRoot.attachShadow({
  mode: 'open',
});

// @ts-ignore
render(<App />, appRoot.shadowRoot);
