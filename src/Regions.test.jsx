import { render } from '@testing-library/react';

import { region, regions } from './fixtures/restaurant';

import Regions from './Regions';

describe('Regions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickSelectRegion = jest.fn();

  const renderRegions = (paramRegion) => render((
    <Regions region={paramRegion} regions={regions} onClickSelectRegion={handleClickSelectRegion} />
  ));

  it('regions가 렌더링된다', () => {
    const { container } = renderRegions();

    expect(container).toHaveTextContent(regions[0].name);
  });

  context('region이 없을때', () => {
    it('(V) 표시가 보이지않는다', () => {
      const { container } = renderRegions('');

      expect(container).not.toHaveTextContent('(V)');
    });
  });

  context('region이 있을때', () => {
    it('(V) 표시가 렌더링된다', () => {
      const { container } = renderRegions(region);

      expect(container).toHaveTextContent('(V)');
    });
  });
});
