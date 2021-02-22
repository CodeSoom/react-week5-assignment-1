import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RegionList from './RegionList';

describe('RegionContainer', () => {
  const handleClick = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '인천' },
    { id: 3, name: '부산' },
  ];
  const regionID = 1;

  it('지역들을 보여준다.', () => {
    const { queryByText } = render(
      <RegionList
        regions={regions}
        selectedRegionID={regionID}
        onClick={handleClick}
      />,
    );
    expect(queryByText('인천')).toBeInTheDocument();
    expect(queryByText('부산')).toBeInTheDocument();
  });

  it('지역을 클릭하면 handleClick함수가 실행된다.', () => {
    const { queryByText } = render(
      <RegionList
        regions={regions}
        selectedRegionID={regionID}
        onClick={handleClick}
      />,
    );
    fireEvent.click(queryByText('인천'));
    expect(handleClick).toBeCalled();
  });

  it('선택된 지역은 (V)를 같이 보여준다.', () => {
    const { queryByText } = render(
      <RegionList
        regions={regions}
        selectedRegionID={regionID}
        onClick={handleClick}
      />,
    );
    expect(queryByText('서울(V)')).toBeInTheDocument();
  });
});
