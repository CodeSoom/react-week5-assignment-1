import { fireEvent, render } from '@testing-library/react';

import { REGIONS } from './fixture';

import Regions from './Regions';

const updateSelectedRegion = jest.fn();

describe('Regions', () => {
  const renderComponent = (regions, selectedRegion) => render(
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      updateSelectedRegion={updateSelectedRegion}
    />,
  );

  it('render', () => {
    const { container } = renderComponent(REGIONS);

    expect(container).toHaveTextContent('서울');
  });

  context('지역이 있을때', () => {
    it('지역을 클릭하면 updateSelectedRegion가 호출된다', () => {
      const { getByRole } = renderComponent(REGIONS);

      const button = getByRole('button', { name: '서울' });
      fireEvent.click(button);

      expect(updateSelectedRegion).toBeCalled();
    });

    it('선택된 지역에는 V가 표시된다', () => {
      const { container } = renderComponent(REGIONS, '서울');

      expect(container).toHaveTextContent('서울(V)');
    });
  });
});
