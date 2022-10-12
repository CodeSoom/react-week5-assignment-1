import { render } from '@testing-library/react';

import List from './List';

describe('ListContainer', () => {
  it('renders regions list', () => {
    const regions = [
      { id: 1, name: '서울' },
    ];
    const { getByText } = render((
      <List itemTypes={regions} />
    ));

    expect(getByText('서울')).not.toBeNull();
  });

  it('renders categories list', () => {
    const categories = [
      { id: 11, name: '한식' },
    ];
    const { getByText } = render((
      <List itemTypes={categories} />
    ));

    expect(getByText('한식')).not.toBeNull();
  });

  it('renders restaurants list', () => {
    const restaurants = [
      {
        id: 101, name: '마녀식당', type: '일식', address: '서울시 강남구',
      },
    ];
    const { getByText } = render((
      <List itemTypes={restaurants} />
    ));

    expect(getByText('마녀식당')).not.toBeNull();
  });
});
