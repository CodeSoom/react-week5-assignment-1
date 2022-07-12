import { render, fireEvent } from '@testing-library/react';

import Region from './Region';

describe('Region', () => {
  const region = { id: 1, name: '서울' };

  const handleClick = jest.fn();

  const renderRegion = ({ selected, onClick } = {}) => render((
    <Region
      region={region}
      selected={selected}
      onClick={onClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the region name', () => {
    const { container } = renderRegion();

    expect(container).toHaveTextContent(region.name);
  });

  it('listens click event', () => {
    const { getByRole } = renderRegion({
      onClick: handleClick,
    });

    fireEvent.click(getByRole('button', { name: region.name }));

    expect(handleClick).toBeCalledWith(region);
  });

  context('with selected', () => {
    it('renders the check mark (V)', () => {
      const { container } = renderRegion({
        selected: true,
      });

      expect(container).toHaveTextContent('(V)');
    });
  });

  context('without selected', () => {
    it("doesn't render the check mark (V)", () => {
      const { container } = renderRegion({
        selected: false,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
