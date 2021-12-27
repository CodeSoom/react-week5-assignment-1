import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  context('with categories', () => {
    it('render "category" buttons', () => {
      const categories = [
        { id: 1, name: '한식' },
        { id: 2, name: '양식' },
        { id: 3, name: '일식' },
      ];

      const { getByRole } = render(
        <Categories categories={categories} />,
      );

      categories.forEach((category) => {
        expect(getByRole('button', { name: category.name })).toBeInTheDocument();
      });
    });
  });

  context('without categories', () => {
    it('noting render', () => {
      const { container } = render(
        <Categories categories={[]} />,
      );

      expect(container.firstChild).not.toBeInTheDocument();
    });
  });
});
