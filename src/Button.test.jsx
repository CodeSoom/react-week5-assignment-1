import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('Button render', () => {
    const data = {
      id: 1,
      name: '서울',
      active: true,
    };
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick} data={data} />);

    expect(getByText('서울')).toBeInTheDocument();

    fireEvent.click(getByText('서울'));

    expect(getByText('서울')).toBeCalled();

    expect(getByText('서울(V)')).toBeInTheDocument();
  });
});
