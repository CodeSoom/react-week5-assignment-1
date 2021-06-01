import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { regions } from '../../fixtures/regions';

import RegionContainer from '.';

describe('RegionContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ regions }));
  });

  it('renders region buttons', () => {
    const { getByRole } = render(<RegionContainer />);

    regions.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });
});
