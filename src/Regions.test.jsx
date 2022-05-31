import { render, screen } from '@testing-library/react';

import state from '../fixtures/state';
import Regions from './Regions';

describe('Regions', () => {
  it('renders regions', () => {
    const handleClick = jest.fn();

    render(<Regions state={state} onClick={handleClick} />);

    state.regions.forEach((region) => {
      expect(screen.getByText(region.name)).toHaveValue(String(region.id));
    });
  });
});
