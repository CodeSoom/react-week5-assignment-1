import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Region from './Region';

const region = {
  id: 1,
  name: '서울',
};

const onClick = jest.fn();

describe('Region', () => {
  it('select nothing with initiation', () => {
    const { queryByText } = render(
      <Region
        key={region.id}
        region={region}
        onClick={onClick}
      />,
    );

    expect(queryByText(/(V)/)).toBeNull();
    expect(queryByText(/서울/)).not.toBeNull();
  });

  it('returns selected region and update text', () => {
    const { container, getByText } = render(
      <Region
        key={region.id}
        region={region}
        onClick={onClick}
        selectedRegion={region}
      />,
    );

    fireEvent.click(getByText(/서울/));
    expect(onClick).toBeCalled();
    expect(container).toHaveTextContent('서울(V)');
  });
});
