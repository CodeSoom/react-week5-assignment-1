import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from './fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      selectedRegion: {
        regionId: 0,
      },
    }));

    useDispatch.mockImplementation(() => dispatch);

    jest.clearAllMocks();
  });

  context('when load complete', () => {
    it('calls set regions dispatch', () => {
      const { getByText } = render(<RegionsContainer />);

      regions.forEach(({ name }) => {
        expect(getByText(`${name}`)).not.toBeNull();
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('click region', () => {
    it('calls check region dispatch', () => {
      const { getByText } = render(<RegionsContainer />);

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
