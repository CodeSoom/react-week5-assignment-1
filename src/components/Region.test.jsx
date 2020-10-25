import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Region from './Region';

describe('Region', () => {
  const clickHandler = jest.fn();

  function renderRegion({ isSelectedReturnValue }) {
    return render(
      <Region
        isSelected={() => isSelectedReturnValue}
        name="서울"
        onClick={clickHandler}
      />,
    );
  }

  it('is not existed selected region', () => {
    const { queryByText } = renderRegion({ isSelectedReturnValue: false });

    expect(queryByText(/서울/)).not.toBeNull();

    expect(clickHandler).not.toBeCalled();

    fireEvent.click(queryByText(/서울/));

    expect(clickHandler).toBeCalled();
  });

  it('is exist selected region', () => {
    const { queryByText } = renderRegion({ isSelectedReturnValue: true });

    expect(queryByText(/서울(v)/)).toBeNull();
  });
});
