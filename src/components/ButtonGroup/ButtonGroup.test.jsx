import { fireEvent, render } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup', () => {
  it('전달한 목록과 렌더링 방식에 따라 내용을 출력한다.', () => {
    const { getByText } = render(<ButtonGroup
      items={[
        { id: 1, text: '버튼1' },
      ]}
      render={(item) => item.text}
      keyOfItem={(item) => item.id}
    />);

    expect(getByText('버튼1')).not.toBeNull();
  });

  it('클릭시 전달받은 onClick을 실행한다.', () => {
    const onClick = jest.fn();
    const { getByText } = render(<ButtonGroup
      items={[
        { id: 1, text: '버튼1' },
      ]}
      render={(item) => item.text}
      keyOfItem={(item) => item.id}
      onClick={onClick}
    />);

    fireEvent.click(getByText('버튼1'));

    expect(onClick).toBeCalledWith({ id: 1, text: '버튼1' });
  });
});
