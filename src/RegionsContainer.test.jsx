import { render, fireEvent } from '@testing-library/react';
import given from 'given2';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: given.regions,
      filter: given.filter,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders regions', () => {
    given('regions', () => regions);
    given('filter', () => ({ region: null }));

    const { getAllByRole } = render((
      <RegionsContainer onClick={handleClick} />
    ));

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(regions.length);
  });

  it('renders button to listent to click event', () => {
    given('regions', () => regions);
    given('filter', () => ({ region: null }));

    const { getAllByRole } = render((
      <RegionsContainer onClick={handleClick} />
    ));

    const regionButtons = getAllByRole('button');

    regionButtons.forEach((regionButton) => {
      fireEvent.click(regionButton);

      expect(handleClick).toBeCalledWith({
        field: 'region',
        content: regionButton.textContent,
      }); expect(handleClick).toBeCalled();
    });
  });

  regions.forEach((region, index) => {
    it("renders 'V' button with equal filter", () => {
      given('regions', () => regions);
      given('filter', () => ({ region: region.name }));

      const { getAllByRole } = render((
        <RegionsContainer onClick={handleClick} />
      ));

      expect(getAllByRole('button')[index].textContent).toContain('V');
    });
  });
});
