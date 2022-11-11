import { fireEvent, render, screen } from '@testing-library/react';

import Region from './Region';

import { regions } from '../fixtures/data';

jest.mock('react-redux');

describe('Region', () => {
  const handleClick = jest.fn();

  const renderRegion = ({ region, isSelected = false }) => render((
    <Region
      region={region}
      isSelected={isSelected}
      onClick={handleClick}
    />
  ));

  it('지역 목록이 랜더링된다', () => {
    const region = regions[0];

    const { container } = renderRegion({ region });

    expect(container).toHaveTextContent(region.name);
  });

  it('지역을 선택하면 handleClick이 호출한다', () => {
    const region = regions[0];

    renderRegion({ region });

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toBeCalledWith(region.name);
  });

  context('선택된 지역이 있으면', () => {
    it('선택된 지역에 "V"가 랜더링된다', () => {
      const region = regions[0];

      const { container } = renderRegion({ region, isSelected: true });

      expect(container).toHaveTextContent(`${region.name}(V)`);
    });
  });

  context('선택되지 않은 지역에는', () => {
    it('"V"가 랜더링되지 않는다', () => {
      const region = regions[0];

      const { container } = renderRegion({ region, isSelected: false });

      expect(container).toHaveTextContent(`${region.name}`);
      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
