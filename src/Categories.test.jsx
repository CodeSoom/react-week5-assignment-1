import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  it('Renders Categories Button', () => {
    const handleClick = jest.fn();

    const { queryByText, getByText } = render(
      <Categories
        Categories={Categories}
        onclick={handleClick}
      />,
    );
    expect(queryByText('일식')).not.toBeNull();

    fireEvent.click(getByText('일식'));

    expect(handleClick).toBeCalled();
  });
});
