import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      filter: {},
    }));
  });

  function renderApp() {
    const { container } = render(<App />);

    return {
      container,
    };
  }

  it('renders', () => {
    const { container } = renderApp();

    expect(container).not.toBeNull();
  });
});
