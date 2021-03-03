import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryContainer from './CategoryContainer';

jest.mock('react-redux');

describe('CategoryContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories: [{ id: 1, name: '한식' }],
    }));
  });

  it('render category container', () => {
    const { container } = render(
      <CategoryContainer />,
    );
    expect(container).toHaveTextContent('한식');
  });

  it('listen category click event', () => {
    const { getByText } = render(
      <CategoryContainer />,
    );

    fireEvent.click(getByText('한식'));
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedCategory',
      payload: {
        name: '한식',
      },
    });
  });
});
