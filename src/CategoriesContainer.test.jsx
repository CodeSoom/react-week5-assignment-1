import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('categories 렌더링', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [{
        id: 1,
        name: '테스트',
      }],
    }));

    const { getByText } = render(<CategoriesContainer />);
    expect(getByText('테스트')).not.toBeNull();
  });
});
