import { fireEvent, render } from '@testing-library/react';

import Button from './Button';

const BUTTON_TEXT = '버튼';
const ACTIVE_TEXT = '(V)';

describe('Button', () => {
  it(`children props로 전달된 ${BUTTON_TEXT} 텍스트를 가진 버튼이 보인다.`, () => {
    const { getByRole } = render(<Button>{BUTTON_TEXT}</Button>);

    expect(getByRole('button')).toBeInTheDocument();
    expect(getByRole('button')).toHaveTextContent(BUTTON_TEXT);
  });

  it('버튼을 클릭하면 props로 받은 onClick이 호출된다.', () => {
    const onClick = jest.fn();

    const { getByRole } = render(<Button onClick={onClick}>{BUTTON_TEXT}</Button>);

    fireEvent.click(getByRole('button'));

    expect(onClick).toBeCalled();
  });

  it(`active props가 true면 버튼에 ${ACTIVE_TEXT}표시가 추가된다.`, () => {
    const { getByText } = render(<Button active>{BUTTON_TEXT}</Button>);

    expect(getByText(ACTIVE_TEXT, { exact: false })).toBeInTheDocument();
  });
});
