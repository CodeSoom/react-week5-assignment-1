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

  function renderButton() {
    const { container, getByText } = render(
      <Button
        name={name}
        onClick={handleClick}
      />,
    );

    return {
      container,
      button: getByText('서울'),
    };
  }

  it('renders', () => {
    const { container } = renderButton();

    expect(container).not.toBeNull();
    expect(container).toHaveTextContent('서울');
  });

  it('handles click', () => {
    const { button } = renderButton();

    click(button);

    expect(handleClick).toBeCalled();
  });
});
