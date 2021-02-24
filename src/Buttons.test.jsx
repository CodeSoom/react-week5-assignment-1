import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

import regions from '../fixtures/regions';

describe('Buttons', () => {
  const handleClick = jest.fn();

  const renderButtons = (buttons) => render((
    <Buttons
      buttons={buttons}
      handleClick={handleClick}
    />
  ));

  it('calls handleClick function as many as buttons', () => {
    const { getByText } = renderButtons(regions);

    regions.forEach(({ name }) => {
      fireEvent.click(getByText(name));
    });

    expect(handleClick).toBeCalledTimes(regions.length);
  });
});
