import { render } from '@testing-library/react';

import Button from './Button';
import { region, category } from '../__fixtures__/data';

const appComponent = (item, selected) => render(
  <Button
    key={item}
    item={item}
    selected={selected}
  />,
);

describe('<Button/>', () => {
  context('without selected', () => {
    it('renders region', () => {
      const { container } = appComponent(region);

      expect(container).toHaveTextContent('서울');
    });

    it('renders category', () => {
      const { container } = appComponent(category);

      expect(container).toHaveTextContent('한식');
    });
  });

  context('with selected', () => {
    it('renders (V) mark', () => {
      const { container } = appComponent(region, region.name);

      expect(container).toHaveTextContent('(V)');
    });
  });
});
