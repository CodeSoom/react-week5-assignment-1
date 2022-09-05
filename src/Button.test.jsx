import { render } from '@testing-library/react';

import Button from './Button';
import { region, category } from '../__fixtures__/data';

const handleClick = jest.fn();

const renderButton = (item, selected) => render(
  <Button
    item={item}
    selected={selected}
    onClick={handleClick}
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
    const selected = region.name;
    it('renders (V) mark', () => {
      const { container } = renderButton({ region, selected });

      expect(container).toHaveTextContent('(V)');
    });
  });
});
