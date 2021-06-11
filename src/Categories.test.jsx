import { render } from '@testing-library/react';

import Categories from './Categories';
// import categories from '../fixtures/Categories';

jest.mock('react-redux');

describe('Categories', () => {
  it('renders Categories', () => {
    const categories = [{ id: 1, name: '한식' }];
    const { container } = render(<Categories categories={categories} />);

    expect(container).toHaveTextContent(/한식/);
  });
});
