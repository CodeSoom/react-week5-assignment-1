import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const renderRegionsContainer = () => render(<RegionsContainer />);

  it('renders Regions', () => {
    const { container } = renderRegionsContainer();

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when buttion is clicked', () => {
    it('dispatch selectedRegion', () => {
      const { getByText } = renderRegionsContainer();

      fireEvent.click(getByText(/서울/));

      expect(dispatch).toBeCalled();
    });
  });
});
