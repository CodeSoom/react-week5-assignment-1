import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import Locations from './Locations';

import locations from '../fixtures/locations';

jest.mock('react-redux');

describe('LocationContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ locations }));
  });

  function renderLocationsContainer(selectedlocationname) {
    return render((
      <Locations
        locations={locations}
        onClick={dispatch}
        selectedlocationname={selectedlocationname}
      />));
  }

  it('onClick함수가 실행합니다.', () => {
    const { getByText } = renderLocationsContainer();

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText(/서울/));

    expect(dispatch).toBeCalled();
  });

  it('선택한 값은 V표기 합니다.', () => {
    const selectedlocationname = '서울';
    const { queryByText } = renderLocationsContainer(selectedlocationname);

    expect(queryByText('서울(V)')).not.toBeNull();
  });
});
