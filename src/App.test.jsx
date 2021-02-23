import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

import locations from '../fixtures/locations';
import categories from '../fixtures/categories';
import { useDispatch, useSelector } from '../__mocks__/react-redux';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ locations, categories }));
  });

  it('지역을 출력합니다.', () => {
    const { queryByText } = render((<App />));

    locations.forEach((location) => {
      expect(queryByText(location.name)).not.toBeNull();
    });
  });

  it('분류를 출력합니다.', () => {
    const { queryByText } = render((<App />));

    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    });
  });
});
