import { fireEvent, render } from '@testing-library/react';
import Item from './Item';

describe('Item', () => {
  const handleClick = jest.fn();

  const renderComponent = () => render(<Item
    item={{ name: 'test', id: 1 }}
    selectedId={1}
    onClick={handleClick}
  />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Item 렌더링', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('버튼 클릭 시, handleClick 이 실행된다.', () => {
    const { getByRole } = renderComponent();

    fireEvent.click(getByRole('button', { name: /test/ }));
    expect(handleClick).toBeCalled();
  });
});
