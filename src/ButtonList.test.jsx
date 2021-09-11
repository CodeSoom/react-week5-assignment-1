import { render } from '@testing-library/react';

import ButtonList from './ButtonList';

import { regions } from '../fixtures';

describe('ButtonList', () => {
  const handleClick = jest.fn();

  it('shows items', () => {
    const { getByText } = render((
      <ButtonList
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
