import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import CategoriesButtonContainer from './CategoriesButtonContainer';

jest.mock('react-redux');

describe('CategoriesButtonContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const initialState = {
    id: 1,
    name: '한식',
  };

  it('CategoriesButtonContainer render', () => {
    const { getByText } = render(<CategoriesButtonContainer data={initialState} />);

    expect(getByText('한식')).toBeInTheDocument();
  });
});
