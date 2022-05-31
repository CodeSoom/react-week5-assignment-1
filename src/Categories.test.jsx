import { render, screen } from '@testing-library/react';

import state from '../fixtures/state';
import Categories from './Categories';

describe('Categories', () => {
  it('renders Categories list', () => {
    const handleClick = jest.fn();

    render(<Categories state={state} onClick={handleClick} />);

    state.categories.forEach((category) => {
      expect(screen.getByText(category.name)).toHaveValue(String(category.id));
    });
  });
});
