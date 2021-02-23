import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '인천' },
    { id: 3, name: '부산' },
  ];
  const regionID = 1;

  function renderList() {
    return render(
      <Regions
        regions={regions}
        selectedRegionID={regionID}
        onClick={handleClick}
      />,
    );
  }

  it('지역들을 보여준다.', () => {
    const { queryByText } = renderList();
    expect(queryByText('인천')).toBeInTheDocument();
    expect(queryByText('부산')).toBeInTheDocument();
  });

  it('지역을 클릭하면 handleClick함수가 실행된다.', () => {
    const { queryByText } = renderList();
    fireEvent.click(queryByText('인천'));
    expect(handleClick).toBeCalled();
  });

  it('선택된 지역은 (V)를 같이 보여준다.', () => {
    const { queryByText } = renderList();
    expect(queryByText('서울(V)')).toBeInTheDocument();
  });
});
