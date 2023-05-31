import { fireEvent, render, screen } from '@testing-library/react';
import RegionContainer from './RegionContainer';

describe('RegionContainer', () => {
  // TODO
  // 1. API를 받아서 데이터 받아오기
  // 2. 하위 컴포넌트에 Region data 넘겨주기
  // 3. 지역 선택시 state에 넘겨주기

  const renderRegionContainer = () => render(<RegionContainer />);

  it('데이터 받기', () => {
    const { getByText } = renderRegionContainer();
    const handleClickButton = jest.fn();
    // 데이터 페칭하기
    const regions = [
      { id: 1, name: '서울' },
    ];
    // fireEvent.change(getByLabelText('할 일'), {
    //     target: { value: '무언가 하기' },
    //   });

    //   expect(handleChange).toBeCalled();

    //   fireEvent.click(getByText('추가'));

    //   expect(handleClick).toBeCalled();
    // 페칭한 데이터 있는지 확인
    expect(getByText('서울')).not.toBeNull();
    fireEvent.click(getByText('서울'));
    expect(handleClickButton).toHaveBeenCalled();
  });
});
