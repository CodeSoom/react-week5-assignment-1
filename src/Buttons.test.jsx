import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

import { regions } from '../fixtures';

describe('Buttons', () => {
  const handleClick = jest.fn();

  const renderButtons = (buttons, name) => render((
    <Buttons
      buttons={buttons}
      handleClick={handleClick}
      clickedName={name}
    />
  ));

  it('calls handleClick function as many as buttons', () => {
    const { getByText } = renderButtons(regions);

    regions.forEach(({ name }) => {
      fireEvent.click(getByText(name));
    });

    expect(handleClick).toBeCalledTimes(regions.length);
  });

  it('renders (V) along the selected item', () => {
    const { queryByText } = renderButtons(regions, '서울');

    expect(queryByText('서울(V)')).not.toBeNull();
  });
});
