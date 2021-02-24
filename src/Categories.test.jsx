import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const handleClick = jest.fn();

  it('renders Categories', () => {
    const categories = [{ id: 1, name: '한식' }];

    const { queryByText } = render(<Categories
      categories={categories}
      onClick={handleClick}
    />);

    expect(queryByText('한식')).not.toBeNull();
  });

  it('listens category button click event', () => {
    const categories = [{ id: 1, name: '한식' }];

    const { queryByText } = render(<Categories
      categories={categories}
      onClick={handleClick}
    />);

    fireEvent.click(queryByText('한식'));

    expect(handleClick).toBeCalledWith(1);
  });

  context('when selected', () => {
    it('renders "category name" + "(V)"', () => {
      const categories = [{ id: 1, name: '한식' }];

      const { queryByText } = render(<Categories
        categories={categories}
        onClick={handleClick}
        selectId={1}
      />);

      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });

  context('When not selected', () => {
    it('renders "category name"', () => {
      const categories = [{ id: 1, name: '한식' }];

      const { queryByText } = render(<Categories
        categories={categories}
        onClick={handleClick}
        selectId={null}
      />);

      expect(queryByText('한식')).not.toBeNull();
    });
  });
});
