import { render } from '@testing-library/react';

import TextList from './TextList';

import { restaurants } from '../fixtures';

describe('TextList', () => {
  const queriedRestaurants = restaurants['서울 1'].map(({ name }) => name);

  it('shows items', () => {
    const { getByText } = render((
      <TextList
        items={queriedRestaurants}
      />
    ));

    expect(getByText('양천주가')).not.toBeNull();
    expect(getByText('한국식 초밥')).not.toBeNull();
    expect(getByText('김초밥')).not.toBeNull();
  });
});
