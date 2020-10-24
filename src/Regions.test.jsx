import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions Component', () => {
  const handleClick = jest.fn();

  it('Page render', () => {
    const { getByText } = render((
      <Regions />
    ));

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/대전/)).not.toBeNull();
    expect(getByText(/대구/)).not.toBeNull();
    expect(getByText(/부산/)).not.toBeNull();
    expect(getByText(/광주/)).not.toBeNull();
    expect(getByText(/강원도/)).not.toBeNull();
    expect(getByText(/인천/)).not.toBeNull();
  });

  it('Click region', () => {
    const { screen } = render((
      <Regions />
    ));

    expect(handleClick).not.toBeCalled();
    fireEvent.click(screen.getByRole('button', { name: /서울/ }));
    expect(handleClick).toBeCalled();
  });
});
