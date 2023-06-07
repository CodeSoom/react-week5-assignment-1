import { render, fireEvent } from '@testing-library/react';
import Region from './Region';
import { regions, selectedRegionAndCategory } from '../fixtures/data';

describe('Region', () => {
  const onClick = jest.fn();

  const renderRegion = () => render(
    <Region
      regions={regions}
      selectedRegionAndCategory={selectedRegionAndCategory}
      onClick={onClick}
    />,
  );

  it('지역 input이 보인다.', () => {
    const { getByText } = renderRegion();
    expect(getByText('부산')).not.toBeNull();
  });
  it('지역 input을 클릭하면 함수를 호출한다.', () => {
    const { getByText } = renderRegion();
    fireEvent.click(getByText('부산'));
    expect(onClick).toBeCalledWith({ id: 2, name: '부산' });
  });
  it('선택된 input 옆에는 체크표시가 된다.', () => {
    const { getByText } = renderRegion();
    expect(getByText('서울 v')).not.toBeNull();
  });
});
