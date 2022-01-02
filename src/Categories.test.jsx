import { render } from '@testing-library/react';
import Categories from './Categories';

describe('Categories', () => {
  it('categories 렌더링', () => {
    const categories = [{
      id: 1,
      name: '한식',
    }];

    const { getByText } = render(<Categories categories={categories} />);
    expect(getByText('한식')).not.toBeNull();
  });
});
