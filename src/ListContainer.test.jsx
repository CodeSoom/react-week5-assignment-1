import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import ListContainer from './ListContainer';

jest.mock('react-redux');
jest.mock('./services/api');

const listItems = {
  regions: [{ id: 1, name: '서울' }],
  categories: [{ id: 11, name: '한식' }],
  restaurants: [
    {
      id: 101,
      name: '마녀식당',
      type: '일식',
      address: '서울시 강남구',
    },
  ],
};

describe('ListContainer', () => {
  const renderListContainer = () => render((<ListContainer />));

  given('listItems', () => []);
  useSelector.mockImplementation((selector) => selector({
    listItems: given.listItems,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('renders listItems', () => {
    given('listItems', () => listItems);

    const { container } = renderListContainer();

    expect(container).not.toBeNull();
  });
});
