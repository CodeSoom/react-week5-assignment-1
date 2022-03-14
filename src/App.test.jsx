import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

jest.unmock('react-redux');
jest.mock('./services/index.js');

describe('App', () => {
  const renderApp = () => render(<Provider store={store}><App /></Provider>);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('App 렌더링', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });
});
