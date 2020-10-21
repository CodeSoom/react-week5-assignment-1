import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  function renderRegionContainer() {
    return render((
      <RegionContainer />
    ));
  }

  it('show region buttons', () => {
    const { getByText } = renderRegionContainer();

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  describe('checkRegion', () => {
    it('change checked region', () => {
      const { getByText } = renderRegionContainer();

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith({
        type: 'checkRegion',
        payload: {
          id: 1,
        },
      });
    });
  });
});
