import { render, fireEvent } from "@testing-library/react";

import Button from './Button';

describe('Button', () => {
  test('show button with onClickFunction', () => {
    const onClickFunction = jest.fn();

    const { getByText } = render((
      <Button onClick={onClickFunction}>
        대전
      </Button>
    ));
    expect(getByText('대전')).not.toBeNull();
    fireEvent.click(getByText('대전'));
    expect(onClickFunction).toBeCalled();
  });
});