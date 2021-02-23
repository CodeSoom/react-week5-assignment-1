import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { regions, categories } from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
    }));
  });

  it('button들을 보여준다.', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalled();

    regions.forEach((region) => {
      const { name } = region;

      expect(queryByText(name)).not.toBeNull();
    });

    categories.forEach((category) => {
      const { name } = category;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
