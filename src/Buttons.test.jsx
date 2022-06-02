import { render, screen } from '@testing-library/react';

import state from '../fixtures/state';
import Buttons from './Buttons';

describe('Buttons', () => {
  it('renders Buttons', () => {
    const handleClick = jest.fn();
    const currentId = '1';

    render(
      <Buttons
        items={state.regions}
        name="currentRegionId"
        currentId={currentId}
        onClick={handleClick}
      />,
    );
    const buttons = screen.getAllByRole('button');
    buttons.forEach((button, index) => {
      expect(button).toHaveValue(String(state.regions[index].id));
    });
  });
});
