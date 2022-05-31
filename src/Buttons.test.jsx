import { render, screen } from '@testing-library/react';

import state from '../fixtures/state';
import Buttons from './Buttons';

describe('Buttons', () => {
  it('renders Buttons', () => {
    const handleClick = jest.fn();
    const currentId = 1;

    render(<Buttons
      items={state.regions}
      name="currentRegionId"
      currentId={currentId}
      onClick={handleClick}
    />);

    state.regions.forEach((region) => {
      if (region.id === currentId) {
        expect(screen.getByText(`${region.name}(V)`)).toHaveValue(String(region.id));
      }
      if (region.id !== currentId) {
        expect(screen.getByText(region.name)).toHaveValue(String(region.id));
      }
    });
  });
});
