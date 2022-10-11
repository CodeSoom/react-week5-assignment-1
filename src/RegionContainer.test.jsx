import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import regions from '../fixtures/region';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  it('shows region', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      categories: [],
      restaurants: [],
    }));

    const { queryByText } = render((
      <RegionContainer />
    ));

    expect(queryByText(/서울/)).not.toBeNull();
  });
});
