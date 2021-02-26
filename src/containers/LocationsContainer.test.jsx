import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import Locations from '../components/Locations';

import locations from '../../fixtures/locations';

jest.mock('react-redux');

describe('LocationContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ locations }));
  });

  function renderLocationsContainer(selectedLocationName) {
    return render((
      <Locations
        locations={locations}
        onClick={dispatch}
        selectedLocationName={selectedLocationName}
      />));
  }

  it('onClick함수가 실행합니다.', () => {
    const { getByText } = renderLocationsContainer();

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText(/서울/));

    expect(dispatch).toBeCalled();
  });

  it('선택한 값은 V표기 합니다.', () => {
    const selectedLocationName = '서울';
    const { queryByText } = renderLocationsContainer(selectedLocationName);

    expect(queryByText('서울(V)')).not.toBeNull();
  });
});
