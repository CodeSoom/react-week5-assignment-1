import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import Categories from './Categories';

jest.mock('react-redux');

describe('Categories', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('render Categories', () => {
    const categories = [
      {
        id: 1,
        name: '한식',
      },
      {
        id: 2,
        name: '중식',
      },
    ];
    const { getByText } = render(<Categories categories={categories} />);

    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/중식/)).not.toBeNull();
  });
});
