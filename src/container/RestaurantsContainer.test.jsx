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

  useSelector.mockImplementation((selector) => selector({
    checkedRegion: { id: 1, text: '서울' },
    checkedCategory: { id: 1, text: '한식' },
    restaurants: [
      { id: 1, name: '김말천국' },
      { id: 2, name: '뚝배기리조또' },
      { id: 3, name: '민트불고기' },
    ],
  }));

  it('식당 목록을 보여준다', () => {
    const { getByText } = render((
      <RestaurantsContainer />
    ));
    expect(dispatch).toBeCalled();

    expect(getByText('김말천국')).toBeInTheDocument();
    expect(getByText('뚝배기리조또')).toBeInTheDocument();
    expect(getByText('민트불고기')).toBeInTheDocument();
  });
});
