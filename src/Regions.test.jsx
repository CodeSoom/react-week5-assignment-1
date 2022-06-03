import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('render Regions', () => {
    const { getByText } = render(<Regions />);

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/대전/)).not.toBeNull();
    expect(getByText(/대구/)).not.toBeNull();
  });
});
