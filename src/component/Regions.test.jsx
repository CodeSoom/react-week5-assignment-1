import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('render Regions', () => {
    const regions = [
      {
        id: 1,
        name: '서울',
      },
      {
        id: 2,
        name: '대전',
      },
      {
        id: 3,
        name: '대구',
      },
    ];
    const { getByText } = render(<Regions regions={regions} />);

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/대전/)).not.toBeNull();
    expect(getByText(/대구/)).not.toBeNull();
  });
});
