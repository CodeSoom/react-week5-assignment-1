import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Regions from './Regions';
import regionsFixture from '../../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  it('render', () => {
    render(
      <Regions
        regions={regionsFixture}
        selected={1}
      />,
    );

    expect(screen.getByText('서울(V)')).toBeInTheDocument();
  });

  it('click test', () => {
    render(
      <Regions
        regions={regionsFixture}
        onClick={handleClick}
      />,
    );

    expect(handleClick).not.toBeCalled();

    fireEvent.click(screen.getByRole('button', { name: /서울/ }));

    expect(handleClick).toBeCalled();
  });
});
