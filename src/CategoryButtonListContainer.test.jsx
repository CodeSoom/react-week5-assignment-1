import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import categoriesFixture from './__fixtures__/categories';

import CategoryButtonListContainer from './CategoryButtonListContainer';

jest.mock('react-redux');

function renderCategoryButtonListContainer() {
  render(<CategoryButtonListContainer />);
  return {
    getButtonByName: (name) => screen.getByRole('button', { name }),
  };
}

describe('<CategoryButtonListContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: categoriesFixture,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders category buttons', () => {
    // when
    const { getButtonByName } = renderCategoryButtonListContainer();
    // then
    expect(getButtonByName('한식')).toBeInTheDocument();
    expect(getButtonByName('중식')).toBeInTheDocument();
  });

  it('check when button clicked', () => {
    // when
    const { getButtonByName } = renderCategoryButtonListContainer();
    fireEvent.click(getButtonByName('한식'));
    // then
    expect(dispatch).toBeCalledTimes(3);
  });

  it('uncheck when another button clicked', () => {
    // when
    const { getButtonByName } = renderCategoryButtonListContainer();
    fireEvent.click(getButtonByName('한식'));
    fireEvent.click(getButtonByName('중식'));
    // then
    expect(dispatch).toBeCalledTimes(5);
  });
});
