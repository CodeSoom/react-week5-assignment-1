import React from 'react';

import { render } from '@testing-library/react';

import places from '../../__fixtures__/places';

import PlacesContainer from './PlacesContainer';

import { useSelector } from 'react-redux';

jest.mock('react-redux');

test('PlacesContainer', () => {
    useSelector.mockImplementation((selector) => selector({
        places,
    }));

    render((
        <PlacesContainer />
    ))
})