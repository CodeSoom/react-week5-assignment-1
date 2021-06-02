import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryListContainer from './CategoryListContainer';

describe('CategoryListContainer', () => {
  it('', () => {
    const dispatch = jest.mock();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selected: {
        category: '한식',
      },
      groups: {
        categories: ['한식', '중식'],
      },
    }));

    const { getByRole, queryByRole } = render(<CategoryListContainer />);

    expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
    expect(queryByRole('button', { name: '한식' })).not.toBeInTheDocument();

    expect(getByRole('button', { name: '중식' })).toBeInTheDocument();
  });
});
