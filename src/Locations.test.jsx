import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Locations from './Locations';

import locations from '../fixtures/locations';

describe('Location', () => {
  const onClick = jest.fn();
  it('지역을 출력합니다.', () => {
    const { queryByText } = render((<Locations locations={locations} />));

    locations.forEach((location) => {
      expect(queryByText(location.name)).not.toBeNull();
    });
  });

  it('onClick함수가 실행합니다.', () => {
    const { getByText } = render((<Locations onClick={onClick} />));
    expect(onClick).not.toBeCalled();
    fireEvent.click(getByText(/서울/));
    expect(onClick).toBeCalled();
  });
});
