import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';
import restaurantsFixture from './__fixtures__/restaurants';

import App from './App';

jest.mock('react-redux');

function renderApp() {
  render(<App />);
  return {
    getButtonByName: (name) => screen.getByRole('button', { name }),
    getByText: (text) => screen.getByText(text),
  };
}

describe('<App />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: regionsFixture,
    categories: categoriesFixture,
    restaurants: restaurantsFixture,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders region buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    expect(getButtonByName('서울')).toBeInTheDocument();
    expect(getButtonByName('대전')).toBeInTheDocument();
  });

  it('renders category buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    expect(getButtonByName('한식')).toBeInTheDocument();
    expect(getButtonByName('중식')).toBeInTheDocument();
  });

  it('renders restaurant list', () => {
    // when
    const { getByText } = renderApp();
    // then
    restaurantsFixture.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('check when button clicked', () => {
    // when
    const { getButtonByName } = renderApp();
    fireEvent.click(getButtonByName('서울'));
    fireEvent.click(getButtonByName('한식'));
    // then
    expect(dispatch).toBeCalledTimes(4);
  });

  it('uncheck when another button clicked', () => {
    // when
    const { getButtonByName } = renderApp();
    fireEvent.click(getButtonByName('서울'));
    fireEvent.click(getButtonByName('부산'));
    // then
    expect(dispatch).toBeCalledTimes(4);
  });
});
