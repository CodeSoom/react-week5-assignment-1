import { render } from '@testing-library/react';

import Categories from './Categories';
import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('Categories', () => {
  it('renders Categories', () => {
    const { container } = render(<Categories categories={categories} />);

    expect(container).toHaveTextContent(/한식/);
  });
});
