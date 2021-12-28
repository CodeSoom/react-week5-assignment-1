import { render } from '@testing-library/react';
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
});
