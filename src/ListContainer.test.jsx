import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 11, name: '한식' },
    ],
    restaurants: [
      {
        id: 101, name: '마녀식당', type: '일식', address: '서울시 강남구',
      },
    ],
  }));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('change regions list', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
