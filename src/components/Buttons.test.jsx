import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Buttons from './Buttons';
import categoriesFixture from '../../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  it('render', () => {
    render(
      <Buttons
        items={categoriesFixture}
        selected={1}
      />,
    );

    expect(screen.getByText('한식(V)')).toBeInTheDocument();
  });

  it('click test', () => {
    render(
      <Buttons
        items={categoriesFixture}
        onClick={handleClick}
      />,
    );

    expect(handleClick).not.toBeCalled();

    fireEvent.click(screen.getByRole('button', { name: /한식/ }));

    expect(handleClick).toBeCalled();
  });
});
