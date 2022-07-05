import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const sampleRegions = [
    { id: 0, name: '서울' },
    { id: 1, name: '대구' },
    { id: 2, name: '부산' },
  ];

  const handleClickRegion = jest.fn();

  const renderElement = (regions) => render(
    <Regions
      regions={regions}
      onClickRegion={handleClickRegion}
    />,
  );

  it('전달받은 regions를 렌더링 한다.', () => {
    const { getByText } = renderElement(sampleRegions);
    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
  });

  it('region을 클릭하면 region을 반환한다', () => {
    const { getByText } = renderElement(sampleRegions);
    fireEvent.click(getByText('서울'));
    expect(handleClickRegion).toBeCalledWith({ id: 0, name: '서울' });
  });
});
