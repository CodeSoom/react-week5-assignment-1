import { fireEvent, render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('props로 받은 name을 자식으로 가진 버튼이 보인다.', () => {
    const { getByRole } = render(<Button name="버튼" />);

    expect(getByRole('button')).toBeInTheDocument();
  });

  it('버튼을 클릭하면 props로 받은 onClick이 호출된다.', () => {
    const onClick = jest.fn();

    const { getByRole } = render(<Button name="버튼" onClick={onClick} />);

    fireEvent(getByRole('button')).click();

    expect(onClick).toBeCalled();
  });

  it('버튼에 active props가 true면 버튼에 (V)표시가 추가된다.', () => {
    const { getByRole } = render(<Button name="버튼" active />);

    expect(getByRole('button')).toHaveTextContent(/(V)/g);
  });
});
