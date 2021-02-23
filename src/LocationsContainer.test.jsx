import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

import locations from '../fixtures/locations';

describe('LocationContainer', () => {
  const onClick = jest.fn();

  function renderLocationsContainer(selectedlocationname) {
    return render((
      <Locations
        locations={locations}
        onClick={onClick}
        selectedlocationname={selectedlocationname}
      />));
  }

  it('onClick함수가 실행합니다.', () => {
    const { getByText } = renderLocationsContainer();

    expect(onClick).not.toBeCalled();

    fireEvent.click(getByText(/서울/));

    expect(onClick).toBeCalled();
  });

  it('선택한 값은 V표기 합니다.', () => {
    const selectedlocationname = '서울';
    const { queryByText } = renderLocationsContainer(selectedlocationname);

    expect(queryByText('서울(V)')).not.toBeNull();
  });
});
