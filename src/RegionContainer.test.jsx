import { fireEvent, render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import RegionContainer from './RegionContainer';

describe('RegionContainer', () => {
  // TODO
  // 1. API를 받아서 데이터 받아오기
  // 2. 하위 컴포넌트에 Region data 넘겨주기
  // 3. 지역 선택시 state에 넘겨주기
  // 4. 리덕스 구조 짜기

  // mocks로 모킹하기

  const renderRegionContainer = () => render(<RegionContainer />);

  it('데이터 받기', () => {
    const { getByText } = renderRegionContainer();
    const data = useSelector.mockImplementation(() => [
      { id: 1, name: '서울' },
    ]);
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    // 데이터 페칭하기
    // 페칭한 데이터 있는지 확인
    expect(getByText('서울')).not.toBeNull();
    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalled();
  });
});
