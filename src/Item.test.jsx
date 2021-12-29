import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  context('with region value', () => {
    it('render "region" button', () => {
      const region = {
        id: 1,
        name: '서울',
      };

      const { getByRole } = render(
        <Item value={region} />,
      );

      expect(getByRole('button', { name: region.name })).toBeInTheDocument();
    });
  });

  context('with category value', () => {
    it('render "category" button', () => {
      const category = {
        id: 1,
        name: '한식',
      };

      const { getByRole } = render(
        <Item value={category} />,
      );

      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
  });
});
