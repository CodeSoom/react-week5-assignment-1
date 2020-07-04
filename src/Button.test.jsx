import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  context('상위 컴포넌트에서 전달받은 props 테스트', () => {
    const value = {
      id: 1,
      name: '서울',
    };
    const onClick = jest.fn();

    it('value는 버튼 이름으로 출력', () => {
      const { getByText } = render((
        <Button
          value={value}
          onClick={onClick}
        />
      ));

      expect(getByText(/서울/)).not.toBeNull();
    });

    it('버튼 동작', () => {
      const { getByText } = render((
        <Button
          value={value}
          onClick={onClick}
        />
      ));

      expect(onClick).not.toBeCalled();

      fireEvent.click(getByText(/서울/));

      expect(onClick).toBeCalledWith(1);
    });
  });
});
