import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
import { setRestaurants } from '../../reducer/actions';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockRestore();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('지역과 카테고리가', () => {
    it('선택되지 않은 경우, "지역과 카테고리를 선택해주세요"를 노출한다.', async () => {
      useSelector.mockImplementation((selector) => selector({
        selected: {
          location: null,
          category: null,
        },
      }));

      const { getByText } = render(<RestaurantsContainer />);
      expect(getByText('지역과 카테고리를 선택해주세요')).not.toBeNull();
    });

    it('선택되어있는 경우, 레스토랑 목록을 불러오기위해 dispatch한다.', () => {
      const location = { id: 1, name: '서울' };
      const category = { id: 1, name: '한식' };
      useSelector.mockImplementation((selector) => selector({
        selected: {
          location,
          category,
        },
      }));

      render(<RestaurantsContainer />);

      expect(dispatch).toBeCalledWith(setRestaurants({ location, category }));
    });

    it('변경된 경우, 레스토랑 목록을 불러오기위해 dispatch한다.', () => {
      const location = { id: 1, name: '서울' };
      const category = { id: 1, name: '한식' };
      useSelector.mockImplementation((selector) => selector({
        selected: {
          location,
          category,
        },
      }));

      const { getByText } = render(<RestaurantsContainer />);

      fireEvent.click(getByText('대전'));

      expect(dispatch).toBeCalledWith(setRestaurants({ id: 2, name: '대전' }, category));
    });
  });
});
