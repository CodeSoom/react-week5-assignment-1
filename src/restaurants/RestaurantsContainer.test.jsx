import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    areaName: 1,
    categoryId: 2,
  }));

  describe('표시', () => {
    it('식당 목록과 호신각이 보인다', () => {
      const { getByText } = render((
        <RestaurantsContainer />
      ));
      expect(getByText(/식당 목록/)).not.toBeNull();
      expect(getByText(/호신각/)).not.toBeNull();
    });
  });

  // describe('지역과 카테고리가 선택되면 fetch하고 결과를 보여준다', () => {
  // });
});
