import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import given from 'given2';

import List from './List';

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

describe('List', () => {
  const renderList = () => render((<List />));
  given('listItems', () => []);

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  context('with listItems', () => {
    it('renders regions list', () => {
      given('listItems', () => listItems);

      const { getByText } = renderList();

      expect(getByText('서울')).toBe();
      expect(getByText('한식')).toBe();
    });
  });

  context('without listItems', () => {
    it('renders categories list', () => {
      const { container } = renderList();

      expect(container).toBeNull();
    });
  });
});
