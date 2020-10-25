import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Category from './Category';

describe('Category', () => {
  const clickHandler = jest.fn();

  function renderCategory({ isSelectedReturnValue }) {
    return render(
      <Category
        isSelected={() => isSelectedReturnValue}
        name="한식"
        onClick={clickHandler}
      />,
    );
  }

  it('is not existed selected region', () => {
    const { queryByText } = renderCategory({ isSelectedReturnValue: false });

    expect(queryByText(/한식/)).not.toBeNull();

    expect(clickHandler).not.toBeCalled();

    fireEvent.click(queryByText(/한식/));

    expect(clickHandler).toBeCalled();
  });

  it('is exist selected region', () => {
    const { queryByText } = renderCategory({ isSelectedReturnValue: true });

    expect(queryByText(/한식(v)/)).toBeNull();
  });
});
