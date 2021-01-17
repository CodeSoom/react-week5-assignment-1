import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickSelect = jest.fn();

  const renderButtons = (buttons = [{ id: 1, name: '서울' }], selectedButton = '') => (
    render(<Buttons
      buttons={buttons}
      selectedButton={selectedButton}
      onClickSelect={handleClickSelect}
    />));

  it('버튼을 클릭하면 handleClickSelect 함수가 실행됩니다.', () => {
    const { getByText } = renderButtons();
    const button = getByText('서울');

    expect(handleClickSelect).not.toBeCalled();
    fireEvent.click(button);
    expect(handleClickSelect).toBeCalled();
  });

  context('selectButton이 주어지면', () => {
    const buttons = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }];
    const selectedButton = '서울';

    it('선택된 버튼 문구에 "(V)"가 추가됩니다.', () => {
      const { container } = renderButtons(buttons, selectedButton);

      expect(container).toHaveTextContent(`${selectedButton}(V)`);
    });
  });

  context('buttons가 주어지면,', () => {
    const buttons = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }];

    it('Buttons 버튼들이 출력됩니다.', () => {
      const { container } = renderButtons(buttons);

      buttons.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });
});
