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

  context('카테고리를 선택하면', () => {
    it('선택한 카테고리에 "V"가 랜더링된다', () => {
      const region = regions[0];

      const { container } = renderRegion({ region, isSelected: true });

      expect(container).toHaveTextContent(`${region.name}(V)`);
    });
  });

  context('카테고리를 선택하지 않은 목록에는', () => {
    it('"V"가 랜더링되지 않는다', () => {
      const region = regions[0];

      const { container } = renderRegion({ region, isSelected: false });

      expect(container).toHaveTextContent(`${region.name}`);
      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
