import { render } from '@testing-library/react';
import ItemButtons from './ItemButtons';

describe('ItemButtons', () => {
  it('items를 전달하지 않으면 비어있습니다.', () => {
    const { queryAllByRole } = render(<ItemButtons />);

    expect(queryAllByRole('listitem')).toHaveLength(0);
  });
});
