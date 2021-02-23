import React from 'react';

import { render } from '@testing-library/react';

import List from './List';
import { regions } from './fixtures/mockData';

describe('List', () => {
  context('if there is a list', () => {
    it('should be there list with received prop', () => {
      const { getByRole } = render(<List list={regions} />);

      const list = getByRole('list');

      regions.forEach((region) => {
        expect(list).toHaveTextContent(region.name);
      });
    });
  });

  context('if there is no list', () => {
    it('there should be nothing', () => {
      const { queryByRole } = render(<List />);

      const list = queryByRole('list');

      expect(list).toBeNull();
    });
  });
});
