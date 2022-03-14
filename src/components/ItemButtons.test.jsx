import { render, fireEvent } from '@testing-library/react';
import ItemButtons from './ItemButtons';
import { regions } from '../../fixtures/restaurant';

describe('ItemButtons', () => {
  it('items를 전달하지 않으면 비어있습니다.', () => {
    const { queryAllByRole } = render(<ItemButtons />);

    expect(queryAllByRole('listitem')).toHaveLength(0);
  });

  it('items를 전달하면 버튼 리스트를 보여줍니다.', () => {
    const { queryAllByRole, queryByRole } = render(<ItemButtons items={regions} />);

    expect(queryAllByRole('listitem')).toHaveLength(regions.length);
    regions.forEach(({ name }) => {
      expect(queryByRole('button', { name })).not.toBeNull();
    });
  });

  it('랜더링된 버튼을 클릭하면 onClick이 items의 item과 함께 호출됩니다.', () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(<ItemButtons items={regions} onClick={mockOnClick} />);
    const { id, name } = regions[0];
    const button = getByRole('button', { name });

    fireEvent.click(button);

    expect(mockOnClick).toBeCalledWith(expect.objectContaining({ id, name }));
  });

  describe('selected 속성에 name 또는 id를 전달하면 버튼에 선택 표시가 됩니다.', () => {
    it('name을 전달한 경우', () => {
      const { name } = regions[0];
      const { queryByRole } = render(<ItemButtons items={regions} selected={name} />);

      expect(queryByRole('button', { name: new RegExp(name) })).toHaveTextContent(/V/);
    });

    it('id를 전달한 경우', () => {
      const { id, name } = regions[0];
      const { queryByRole } = render(<ItemButtons items={regions} selected={id} />);

      expect(queryByRole('button', { name: new RegExp(name) })).toHaveTextContent(/V/);
    });
  });
});
