import { render, screen } from '@testing-library/react';

import state from '../fixtures/state';
import App from './App';

describe('App', () => {
  it('renders regions list', () => {
    render(<App />);

    state.regions.forEach((region) => {
      expect(screen.getByText(region.name)).toHaveValue(String(region.id));
    });
  });
});
