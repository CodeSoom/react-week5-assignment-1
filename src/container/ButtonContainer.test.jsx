import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import ButtonContainer from './ButtonContainer';

jest.mock('react-redux');

describe('ButtonContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const initialState = {
    id: 1,
    name: '서울',
  };

  it('ButtonContainer render', () => {
    const { getByText } = render(<ButtonContainer data={initialState} type="region" />);

    expect(getByText('서울')).toBeInTheDocument();
  });
});
