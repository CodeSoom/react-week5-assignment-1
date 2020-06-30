import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  it('should display regions', () => {
    useSelector.mockImplementation((state) => ({
      regions: state.regions,
    }));

    const { getByText } = render((
      <RegionContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
