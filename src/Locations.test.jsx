import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

import locations from '../fixtures/locations';

describe('Location', () => {
  const onClick = jest.fn();

  function renderLocations() {
    return render((
      <Locations
        locations={locations}
        onClick={onClick}
      />));
  }

  it('지역을 출력합니다.', () => {
    const { queryByText } = renderLocations();

    locations.forEach((location) => {
      expect(queryByText(location.name)).not.toBeNull();
    });
  });

  it('onClick함수가 실행합니다.', () => {
    const { getByText } = renderLocations();

    expect(onClick).not.toBeCalled();

    fireEvent.click(getByText(/서울/));

    expect(onClick).toBeCalled();
  });

  it('선택한 값은 V표기 합니다.', () => {
    const { queryByText } = renderLocations();

    expect(queryByText('서울(V)')).not.toBeNull();
  });
});
