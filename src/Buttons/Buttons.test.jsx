import { render, screen, fireEvent } from '@testing-library/react';

import state from '../../fixtures/state';
import Buttons from './Buttons';

describe('Buttons', () => {
  it('renders Buttons', () => {
    const handleClick = jest.fn();
    const currentId = '1';

    render(
      <Buttons
        items={state.regions}
        targetName="currentRegionId"
        currentId={currentId}
        onClick={handleClick}
      />,
    );
    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);
    expect(handleClick).toHaveBeenCalledWith(state.regions[0].id);
  });
});
