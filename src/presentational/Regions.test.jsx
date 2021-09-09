import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickRegion = jest.fn();
  const checkedRegion = {};
  const regions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대구' },
    { id: 3, name: '부산' },
  ];

  function rederRegion() {
    return (
      render(<Regions
        regions={regions}
        handleClickRegion={handleClickRegion}
        checkedElement={checkedRegion}
      />)
    );
  }

  it('지역 목록을 보여준다', () => {
    const { getByText } = rederRegion();

    expect(getByText('서울')).toBeInTheDocument();
    expect(getByText('대구')).toBeInTheDocument();
    expect(getByText('부산')).toBeInTheDocument();
  });
});
