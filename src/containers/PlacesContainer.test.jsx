import React from 'react';

import { useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import PlacesContainer from './PlacesContainer';

import places from '../../fixtures/places';

jest.mock('react-redux');

describe('PlacesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    places,
  }));

  it('shows places list', () => {
    const { container } = render((
      <PlacesContainer />
    ));

    places.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when place button clicked', () => {
    it('acts with place button', () => {
      const { getByText } = render((
        <PlacesContainer />
      ));

      fireEvent.click(getByText(/서울/));
    });
  });
});
