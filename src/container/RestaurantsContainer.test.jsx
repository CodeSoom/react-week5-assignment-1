import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  context('선택된 지역과 카테고리가 있다면', () => {
    it('식당 목록을 보여준다', () => {
      useSelector.mockImplementation((selector) => selector({
        checkedRegion: { id: 1, text: '서울' },
        checkedCategory: { id: 1, text: '한식' },
        restaurants: [
          { id: 1, name: '김말천국' },
          { id: 2, name: '뚝배기리조또' },
          { id: 3, name: '민트불고기' },
        ],
      }));

      const { getByText } = render((
        <RestaurantsContainer />
      ));

      expect(dispatch).toBeCalled();

      expect(getByText('김말천국')).toBeInTheDocument();
      expect(getByText('뚝배기리조또')).toBeInTheDocument();
      expect(getByText('민트불고기')).toBeInTheDocument();
    });
  });

  context('선택된 지역과 카테고리가 없다면', () => {
    it('식당 목록을 보여주지 않는다', () => {
      useSelector.mockImplementation((selector) => selector({
        checkedRegion: null,
        checkedCategory: null,
        restaurants: [],
      }));

      const { container } = render((
        <RestaurantsContainer />
      ));

      expect(dispatch).not.toBeCalled();
      expect(container).not.toContainHTML('<li/>');
    });
  });
});
