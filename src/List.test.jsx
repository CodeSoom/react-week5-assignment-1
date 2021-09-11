import { render, fireEvent } from '@testing-library/react';

import List from './List';

import { regions } from '../fixtures';

describe('List', () => {
  const chosenRegion = {
    id: 1,
    name: '서울',
  };

  const handleChange = jest.fn();

  it('shows items', () => {
    const { getByText } = render((
      <List
        type="region"
        items={regions}
        chosenItem={{}}
        onClick={handleChange}
      />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
    expect(getByText('대구')).not.toBeNull();
  });

  it('add checked mark(V) on the clicked region label', () => {
    const { getByText } = render((
      <List
        type="region"
        items={regions}
        chosenItem={chosenRegion}
        onClick={handleChange}
      />
    ));

    expect(getByText('서울(V)')).not.toBeNull();

    fireEvent.click(getByText('서울(V)'));

    expect(handleChange).toHaveBeenCalled();
  });
});
