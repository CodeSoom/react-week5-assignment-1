import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import List from './List';

jest.mock('react-redux');
jest.mock('./services/api');

describe('List', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('renders regions list', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];
    const { getByText } = render((
      <List listItems={regions} />
    ));

    expect(getByText('서울')).not.toBeNull();
  });

  it('renders categories list', () => {
    const categories = [
      { id: 11, name: '한식' },
    ];
    const { getByText } = render((
      <List listItems={categories} />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
});
