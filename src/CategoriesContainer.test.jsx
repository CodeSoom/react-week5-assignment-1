import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('목록이 랜더링된다', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '분식' },
      ],
    }));

    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('분식')).not.toBeNull();
  });
});
