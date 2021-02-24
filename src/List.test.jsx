import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import List from './List';
import { regions } from './fixtures/mockData';

describe('List', () => {
  context('if there is a list', () => {
    it('should be there list with received prop', () => {
      const onClick = jest.fn();
      const { getByText, getByRole } = render(<List list={regions} onClick={onClick} />);

      const list = getByRole('list');

      regions.forEach((region) => {
        expect(list).toHaveTextContent(region.name);
      });

      fireEvent.click(getByText(regions[0].name));
      expect(onClick).toHaveBeenCalledWith(regions[0]);
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
