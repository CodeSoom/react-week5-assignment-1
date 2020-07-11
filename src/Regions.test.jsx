import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../fixtures/regions';

const onClick = jest.fn();

describe('Regions', () => {
  it('renders list of regions and listens click event', () => {
    const { getByText } = render((
      <Regions
        regions={regions}
        selectedRegion={1}
        onClick={onClick}
      />
    ));

    expect(getByText(/서울/)).not.toBeNull();

    expect(onClick).not.toBeCalled();

    fireEvent.click(getByText(/서울/));

    expect(onClick).toBeCalledWith(1);
  });
});
