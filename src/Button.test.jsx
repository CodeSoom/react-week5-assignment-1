import { render } from "@testing-library/react";

import Button from './Button';

describe('Button', () => {
  test('show button with onClickFunction', () => {
    const { getByText, getByDisplayValue } = render((
      <Button value={} onClick={}/>
    ));

    expect(getByText(/대전/)).not.toBeNull();
    expect(getByDisplayValue('대전')).not.toBeNull();
  });
  // 카테고리도 똑같으니까 나중에.
});