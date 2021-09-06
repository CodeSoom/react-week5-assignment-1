import { fireEvent, render } from '@testing-library/react';

import Places from './Places';

import places from '../../__fixtures__/places';

import { useSelector } from 'react-redux';

jest.mock('react-redux');

test('Places', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
        <Places
        places={places}
        onClick={handleClick}
        />
    ));

    
})