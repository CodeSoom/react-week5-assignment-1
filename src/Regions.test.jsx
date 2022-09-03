import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  it('renders regions', () => {
    const { getAllByRole } = render((
      <Regions
        regions={regions}
        onClick={handleClick}
        filter={null}
      />
    ));

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(regions.length);
  });

  it('renders button to listent to click event', () => {
    const { getAllByRole } = render((
      <Regions
        regions={regions}
        onClick={handleClick}
        filter={null}
      />
    ));

    const regionButtons = getAllByRole('button');

    expect(handleClick).not.toBeCalled();

    regionButtons.forEach((regionButton) => {
      fireEvent.click(regionButton);

      expect(handleClick).toBeCalledWith({
        field: 'region',
        content: regionButton.textContent,
      });
    });
  });

  regions.forEach((region, index) => {
    it("renders 'V' button with equal filter", () => {
      const { getAllByRole } = render((
        <Regions
          regions={regions}
          onClick={handleClick}
          filter={region.name}
        />
      ));

      expect(getAllByRole('button')[index].textContent).toContain('V');
    });
  });
});
