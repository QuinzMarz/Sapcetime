import App from './components/App';

import { h, render } from 'preact';

// app shadow root

const appRoots = document.querySelectorAll('.spacetime-widget') as NodeListOf<HTMLElement>;

Array.from(appRoots).forEach((appRoot: HTMLElement) => {
  appRoot.attachShadow({
    mode: 'open',
  });
  const isLight: boolean = appRoot.hasAttribute('data-light');
  // @ts-ignore
  render(<App isLight={isLight} container={appRoot} />, appRoot.shadowRoot);
});
