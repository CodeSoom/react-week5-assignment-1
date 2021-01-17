import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const handleClick = jest.fn();

  function renderButton(checked = false) {
    return render((
      <Button onClick={handleClick} selected={checked}>
        서울
      </Button>
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('show name', () => {
    const { getByText } = renderButton();
    expect(getByText('서울')).not.toBeNull();
  });

  context('with checked', () => {
    it('draws with (V)', () => {
      const { getByText } = renderButton(true);
      expect(getByText('서울(V)')).not.toBeNull();
    });
  });

  context('when click button', () => {
    it('calls handleClick', () => {
      const { getByText } = renderButton();
      fireEvent.click(getByText('서울'));

      expect(handleClick).toBeCalled();
    });
  });
});
