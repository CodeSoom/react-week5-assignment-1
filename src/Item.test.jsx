import { fireEvent, render } from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  const handleClick = jest.fn();

  const renderComponent = ({
    item = { name: 'test', id: 1 },
    selected = true,
  } = {}) => render(<Item
    item={item}
    selected={selected}
    onClick={handleClick}
  />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Item 렌더링', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('넘겨받은 selected 가 참이라면,  "(V)" 가 표시된다.', () => {
    const { container } = renderComponent({ item: { id: 1, name: 'test' }, selected: true });

    expect(container).toHaveTextContent(/(V)/);
  });

  it('버튼 클릭 시, handleClick 이 실행된다.', () => {
    const { getByRole } = renderComponent();

    fireEvent.click(getByRole('button', { name: /test/ }));
    expect(handleClick).toBeCalled();
  });
});
