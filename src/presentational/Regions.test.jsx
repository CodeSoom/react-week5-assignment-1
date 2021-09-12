import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickRegion = jest.fn();

  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대구' },
    { id: 3, name: '부산' },
  ];

  function rederRegion(checkedRegion) {
    return (
      render(<Regions
        regions={regions}
        handleClickRegion={handleClickRegion}
        checkedRegion={checkedRegion}
      />)
    );
  }

  it('지역 목록을 보여준다', () => {
    const { getByText } = rederRegion(null);

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('대구')).toBeInTheDocument();
    expect(getByText('부산')).toBeInTheDocument();
  });

  it('목록이 클릭되면 체크 표시를 한다', () => {
    const checkedRegion = {
      id: 1,
      text: '서울',
    };

    const { getByText } = rederRegion(checkedRegion);

    expect(getByText('서울(V)')).toBeInTheDocument();
  });
});
