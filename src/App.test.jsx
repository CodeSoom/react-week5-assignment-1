import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  })

  const handleClickSelect = jest.fn();

  context('지역 리스트가 주어지면,', () => {
    const locationList = ['서울', '대전', '부산'];

    it('지역 선택 버튼들이 출력됩니다.', () => {
      const { container } = render(<App />);

      locationList.forEach((location) => {
        expect(container).toHaveTextContent(location);
      });
    });
  });

  context('음식 종류 리스트가 주어지면,', () => {
    const foodTypeList = ['한식', '중식', '일식'];

    it('음식 종류 선택 버튼들이 출력됩니다.', () => {
      const { container } = render(<App />);

      foodTypeList.forEach((foodType) => {
        expect(container).toHaveTextContent(foodType);
      });
    })
  })

  context('결과 리스트가 주어지면,', () => {
    const resultList = ['양천주가', '밀면넘어져요'];

    it('결과 리스트가 출력됩니다.', () => {
      const { container } = render(<App />);

      resultList.forEach((result) => {
        expect(container).toHaveTextContent(result);
      });
    })
  })

  it('서울 버튼을 클릭하면 handleClickSelect 함수가 출력됩니다.', () => {
    const { getByText } = render(<App handleClickSelect={handleClickSelect} />);
    const button = getByText('서울');

    expect(handleClickSelect).not.toBeCalled();
    fireEvent.click(button);
    expect(handleClickSelect).toBeCalled();
  });

  it('서울 버튼을 클릭하면 서울(V)문구로 변경됩니다.', () => {
    const { getByText } = render(<App handleClickSelect={handleClickSelect} />);
    const button = getByText('서울');

    fireEvent.click(button);
    expect(button).toHaveTextContent('서울(V)');
  });
});