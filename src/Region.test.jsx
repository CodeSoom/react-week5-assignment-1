import { fireEvent, render } from '@testing-library/react';

import Region from './Region';

import { regions } from '../__fixture__/restaurantsInfo';

describe('<Regions/>', () => {
  const regionNames = regions.map((region) => region.name);

  const renderRegion = () => ((
    render(<Region regions={regions} />)
  ));

  it('지역 목록이 보임.', () => {
    const { getByText } = renderRegion();

    regionNames.forEach((async (name) => {
      await expect(getByText(name)).not.toBeNull();
    }));
  });

  it('선택된 버튼에 V표시가 보임', () => {
    const { getByText, container } = renderRegion();

    setTimeout(() => {
      fireEvent.click(getByText('서울'));

      expect(container).toHaveTextContent('서울(V)');
    }, 100);
  });
});
