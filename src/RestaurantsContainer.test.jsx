import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

jest.mock('./services/api');

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  useSelector.mockImplementation((selector) => selector({
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

    expect(getByText('김말천국')).toBeInTheDocument();
    expect(getByText('뚝배기리조또')).toBeInTheDocument();
    expect(getByText('민트불고기')).toBeInTheDocument();
  });
});
