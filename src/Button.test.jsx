import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

const { click } = fireEvent;

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const name = '서울';
  const handleClick = jest.fn();

  function renderButton({ selected }) {
    const { container, getByText } = render(
      <Button
        name={name}
        selected={selected}
        onClick={handleClick}
      />,
    );

    return {
      container,
      button: getByText(/서울/),
    };
  }

  context('when not selected', () => {
    it('renders', () => {
      const { container } = renderButton({ selected: false });

      expect(container).not.toBeNull();
      expect(container).toHaveTextContent('서울');
    });
  });

  context('when selected', () => {
    it('renders', () => {
      const { container, button } = renderButton({ selected: true });

      click(button);

      expect(container).toHaveTextContent('서울(V)');
    });
  });

  it('handles click', () => {
    const { button } = renderButton({ selected: false });

    click(button);

    expect(handleClick).toBeCalled();
  });
});
