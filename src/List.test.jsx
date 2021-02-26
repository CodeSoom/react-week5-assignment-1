import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import List from './List';
import { regions } from './fixtures/mockData';

describe('List', () => {
  context('with list', () => {
    it('renders list', () => {
      const { getByRole } = render(
        <List
          list={regions}
        />,
      );
      const list = getByRole('list');

      regions.forEach((region) => {
        expect(list).toHaveTextContent(region.name);
      });
    });

    it('when item clicked show "(V)"', () => {
      const { getByRole } = render(
        <List
          list={
            [{ id: 123, name: '멜버른', clicked: true }]
          }
        />,
      );
      expect(getByRole('list')).toHaveTextContent('멜버른(V)');
    });
    it('can click item', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <List
          list={regions}
          onClick={onClick}
        />,
      );

      fireEvent.click(getByText(regions[0].name));
      expect(onClick).toHaveBeenCalledWith(regions[0]);
    });
  });

  context('without list', () => {
    it('renders "텅~" ', () => {
      const { queryByRole, getByText } = render(<List />);

      const list = queryByRole('list');

      expect(list).toBeNull();
      expect(getByText('텅~')).toBeInTheDocument();
    });
  });
});
