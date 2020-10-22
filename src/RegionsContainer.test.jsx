import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../__fixtures__/regions';

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRegionsContainer() {
    return render((
      <RegionsContainer />
    ));
  }

  it('renders regions', () => {
    const { getByText } = renderRegionsContainer();

    regions.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });

  context('click region button', () => {
    it('dispatch setSelectedRegionName action', () => {
      const { getByText } = renderRegionsContainer();

      fireEvent.click(getByText(regions[0].name));

      expect(dispatch).toBeCalledWith(
        {
          type: 'setSelectedRegionName',
          payload: {
            name: '서울',
          },
        },
      );
    });
  });
});
