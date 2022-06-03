import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const initialState = {
    id: 1,
    name: '서울',
    active: false,
  };

  it('Button render', () => {
    const { getByText } = render(<Button data={initialState} />);

    expect(getByText('서울')).toBeInTheDocument();
  });

  it('Button click check action', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick} data={initialState} />);

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();

    // expect(getByText('서울(V)')).toBeInTheDocument();
  });
});
