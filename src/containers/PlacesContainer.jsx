import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Places from '../components/Places';

import {
    setPlaces,
} from '../modules/actions';

export default function PlacesContainer() {
    const dispatch = useDispatch();

    const { places } = useSelector((state) => ({
        places: state.places,
    }));

    function handlePlaceClick() {
        dispatch(setPlaces());
    }

    return(
        <div>
            <Places 
            places={places} 
            onClick={handlePlaceClick}
            />
        </div>
    )
}