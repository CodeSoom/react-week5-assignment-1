import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';

import App from './App';

function renderApp() {
  render(<App />);
  return {
    getButtonByName: (name) => screen.getByRole('button', { name }),
  };
}

describe('<App />', () => {
  it('renders region buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    expect(getButtonByName('서울'));
    expect(getButtonByName('대전'));
  });

  it('renders category buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    expect(getButtonByName('한식'));
    expect(getButtonByName('중식'));
  });

  it('check when button clicked', () => {
    // when
    const { getButtonByName } = renderApp();
    fireEvent.click(getButtonByName('서울'));
    fireEvent.click(getButtonByName('한식'));
    // then
    expect(getButtonByName('서울(v)')).toBeInTheDocument();
    expect(getButtonByName('한식(v)')).toBeInTheDocument();
  });

  it('uncheck when another button clicked', () => {
    // when
    const { getButtonByName } = renderApp();
    fireEvent.click(getButtonByName('서울'));
    fireEvent.click(getButtonByName('부산'));
    // then
    expect(getButtonByName('서울')).toBeInTheDocument();
    expect(getButtonByName('부산(v)')).toBeInTheDocument();
  });
});
