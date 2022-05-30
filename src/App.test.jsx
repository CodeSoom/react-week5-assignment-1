import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import state from '../fixtures/state';
import App from './App';

describe('App', () => {
  it('renders regions list', () => {
    render(<App />);

    state.regions.forEach((region) => {
      expect(screen.getByText(region.name)).toHaveValue(String(region.id));
    });
  });
  context('when the user clicks a region', () => {
    it('display region name with V sign in current region', async () => {
      render(<App />);
      const user = userEvent.setup();
      const seoul = screen.getByText('서울');
      await user.click(seoul);

      expect(seoul).toHaveTextContent('서울(V)');
    });
  });
});
