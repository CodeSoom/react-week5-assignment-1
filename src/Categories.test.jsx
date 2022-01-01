// Presentational Components: 카테고리목록을 그려주는 것에 대한 테스트
import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = [
    {
      id: 1,
      name: '한식',
    },
  ];

  it('sets categories', () => {
    const { getByText } = render(
      <Categories
        categories={categories}
      />,
    );

    expect(getByText('한식')).toBeInTheDocument();
  });
});
