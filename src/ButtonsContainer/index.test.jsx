import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { regions } from '../../fixtures/regions';

import ButtonsContainer from '.';

describe('ButtonsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ regions }));
  });

  it('renders region buttons', () => {
    const { getByRole } = render(<ButtonsContainer />);

    regions.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });
});
