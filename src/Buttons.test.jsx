import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickSelect = jest.fn();

  it('버튼을 클릭하면 handleClickSelect 함수가 출력됩니다.', () => {
    const { getByText } = render((
      <Buttons
        buttonNameList={['서울']}
        onClickSelect={handleClickSelect}
      />));

    const button = getByText('서울');

    expect(handleClickSelect).not.toBeCalled();
    fireEvent.click(button);
    expect(handleClickSelect).toBeCalled();
  });

  it('버튼을 클릭하면 문구에 "(V)"가 추가됩니다.', () => {
    const { getByText } = render((
      <Buttons
        buttonNameList={['서울']}
        onClickSelect={handleClickSelect}
      />));

    const button = getByText('서울');

    fireEvent.click(button);
    expect(button).toHaveTextContent('서울(V)');
  });

  it('버튼을 클릭하면 이전 선택 버튼 문구는 원래대로 돌아가고, 선택 버튼에 "(V)"가 추가됩니다.', () => {
    const { getByText } = render((
      <Buttons
        buttonNameList={['서울', '대전']}
        onClickSelect={handleClickSelect}
      />));

    const selectedButton = getByText('서울');
    const nonSelectedButton = getByText('대전');

    fireEvent.click(selectedButton);
    expect(selectedButton).toHaveTextContent('서울(V)');
    expect(nonSelectedButton).toHaveTextContent('대전');

    fireEvent.click(selectedButton);
    expect(selectedButton).toHaveTextContent('서울');
    expect(selectedButton).toHaveTextContent('대전(V)');
  });

  context('ButtonsNameList가 주어지면,', () => {
    const buttonNameList = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

    it('ButtonsNameList의 이름을 가진 버튼들이 출력됩니다.', () => {
      const { container } = render(<Buttons buttonNameList={buttonNameList} />);

      buttonNameList.forEach((buttonName) => {
        expect(container).toHaveTextContent(buttonName);
      });
    });
  });
});