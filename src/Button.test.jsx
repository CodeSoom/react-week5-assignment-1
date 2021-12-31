import { render, fireEvent } from "@testing-library/react";

import Button from './Button';

describe('Button', () => {
  context('화면에 버튼이 출력된다', () => {
    it('아이디와 클릭 이벤트를 담은 버튼이 만들어진다', () => {
      const onClickFunction = jest.fn();
      const id = 1;
  
      const { getByText } = render((
        <Button id={id} onClick={onClickFunction}>
          대전
        </Button>
      ));
      expect(getByText('대전')).not.toBeNull();
      expect(getByText('대전')).toHaveAttribute('id', '1');
      fireEvent.click(getByText('대전'));
      expect(onClickFunction).toBeCalled();
    });
  });
});
