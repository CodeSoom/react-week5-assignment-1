import React from 'react';

import { render } from '@testing-library/react';

import RESTAURANTS from '../__fixtures__/restaurants.json';
import List from './List';

describe('<List />', () => {
  const renderComponent = (restaurants) => render((
    <List restaurants={restaurants} />
  ));

  context('empty list', () => {
    it('display empty list', () => {
      const { getByRole } = renderComponent([]);
      expect(getByRole('list').children).toHaveLength(0);
    });
  });

  context('fully list', () => {
    it('display list', () => {
      const { getByRole, getAllByRole } = renderComponent(RESTAURANTS);
      expect(getByRole('list').children).toHaveLength(RESTAURANTS.length);
      expect(getAllByRole('listitem')).toHaveLength(RESTAURANTS.length);
    });
  });
});
