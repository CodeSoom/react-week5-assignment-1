import { fireEvent, render } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup', () => {
  const handleClick = jest.fn();

  const renderButtonGroup = () => render(
    <ButtonGroup
      items={[
        { id: 1, text: '버튼1' },
      ]}
      render={(item) => item.text}
      keyOfItem={(item) => item.id}
      onClick={handleClick}
    />,
  );

  it('전달한 목록과 렌더링 방식에 따라 내용을 출력한다.', () => {
    const { getByText } = renderButtonGroup();

    expect(getByText('버튼1')).toBeInTheDocument();
  });

  it('클릭시 전달받은 onClick 핸들러를 실행한다.', () => {
    const { getByText } = renderButtonGroup();

    fireEvent.click(getByText('버튼1'));

    expect(handleClick).toBeCalledWith({ id: 1, text: '버튼1' });
  });
});
