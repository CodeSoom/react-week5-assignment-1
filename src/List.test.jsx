import { render } from '@testing-library/react';

import List from './List';

import { regions } from '../fixtures';

describe('List', () => {
  const handleClick = jest.fn();

  it('shows items', () => {
    const { getByText } = render((
      <List
        type="region"
        items={regions}
        chosenItem={{}}
        handleClick={handleClick}
      />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });
});
