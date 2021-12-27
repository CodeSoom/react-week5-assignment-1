import { render } from '@testing-library/react';
import ButtonGroup from './ButtonGroup';

describe('ButtonGroup', () => {
  test('전달한 목록과 렌더링 방식에 따라 내용을 출력한다.', () => {
    const { getByText } = render(<ButtonGroup
      items={[
        { id: 1, text: '버튼1' },
      ]}
      render={(item) => item.text}
      keyOfItem="id"
    />);

    expect(getByText('버튼1')).not.toBeNull();
  });
});
