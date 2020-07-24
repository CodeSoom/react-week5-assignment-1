import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

describe('<CategoriesContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('render categories', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
    expect(getByText('짬뽕밥')).not.toBeNull();
  });

  it('click categories', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));
    fireEvent.click(getByText('한식'));
    expect(dispatch).toBeCalled();
  });
});
