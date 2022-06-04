import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import RegionsButtonContainer from './RegionsButtonContainer';

jest.mock('react-redux');

describe('RegionsButtonContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const initialState = {
    id: 1,
    name: '서울',
  };

  it('RegionsButtonContainer render', () => {
    const { getByText } = render(<RegionsButtonContainer data={initialState} />);

    expect(getByText('서울')).toBeInTheDocument();
  });
});
