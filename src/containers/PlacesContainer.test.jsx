import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import PlacesContainer from './PlacesContainer';

import places from '../../fixtures/places';

import {
  clickPlace,
} from '../modules/actions';

jest.mock('react-redux');

describe('PlacesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    places,
  }));

  function renderPlaces() {
    return render((
      <PlacesContainer />
    ));
  }

  it('shows places list', () => {
    const { container } = renderPlaces();

    places.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when buttons clicked', () => {
    it('initiate clickPlace function', () => {
      const { getByText } = renderPlaces();

      places.forEach(({ name }) => {
        fireEvent.click(getByText(name));

        expect(dispatch).toBeCalledWith(clickPlace(name));
      });
    });
  });
});
