import { render } from '@testing-library/react';

import Button from './Button';
import { region, category } from '../__fixtures__/data';

const renderButton = (item, selected) => render(
  <Button
    item={item}
    selected={selected}
  />,
);

describe('<Button/>', () => {
  context('without selected', () => {
    it('renders region', () => {
      const { container } = renderButton(region);

      expect(container).toHaveTextContent('서울');
    });

    it('renders category', () => {
      const { container } = renderButton(category);

      expect(container).toHaveTextContent('한식');
    });
  });

  context('with selected', () => {
    it('renders (V) mark', () => {
      const { container } = renderButton(region, region.name);

      expect(container).toHaveTextContent('(V)');
    });
  });
});
