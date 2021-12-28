import { render } from '@testing-library/react';
import CategoryListContainer from './CategoryListContainer';

describe('CategoryListContainer', () => {
  const renderComponent = () => render(<CategoryListContainer />);

  it('CategoryListContainer 렌더링', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 카테고리 리스트가 노출된다.', () => {
    const { container } = renderComponent();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
  });
});
