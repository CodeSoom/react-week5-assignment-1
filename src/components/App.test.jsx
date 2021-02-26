import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

import locations from '../../fixtures/locations';
import categories from '../../fixtures/categories';

jest.mock('react-redux');
jest.mock('../services/api');

describe('App', () => {
  describe('정보를 가져오는 경우,', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      locations: [],
      restaurants: [],
      selectedlocationname: '',
      selectedcategoryname: '',
    }));

    it('Api에서 지역, 분류, 식당목록 정보를 가져옵니다.', () => {
      render(<App />);

      expect(dispatch).toBeCalledTimes(3);
    });
  });

  describe('출력하는 경우,', () => {
    const dispatch = jest.fn();

    beforeEach(() => {
      jest.clearAllMocks();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({ locations, categories }));
    });

    it('지역을 출력합니다.', () => {
      const { queryByText } = render(<App />);

      locations.forEach((location) => {
        expect(queryByText(location.name)).not.toBeNull();
      });
    });

    it('분류를 출력합니다.', () => {
      const { queryByText } = render(<App />);

      categories.forEach((category) => {
        expect(queryByText(category.name)).not.toBeNull();
      });
    });
  });
});
