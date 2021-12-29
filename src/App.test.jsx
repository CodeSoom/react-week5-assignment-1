import { render } from 'react-dom/cjs/react-dom.development';

import App from './App';

// App test

jest.mock('react-redux');

describe('App', () => {
  const renderApp = () => render((<App />));

  it('sets restaurants', () => {
    const { getByText } = renderApp();

    expect(getByText(/레스토랑/)).toBeInTheDocument();
  });
});
