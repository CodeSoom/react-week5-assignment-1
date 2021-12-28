import { render } from '@testing-library/react';
import AddressListContainer from './AddressListContainer';

describe('AddressListContainer', () => {
  const renderComponent = () => render(<AddressListContainer />);

  it('AddressListContainer 렌더링', () => {
    const { container } = renderComponent();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 지역 리스트가 노출 된다.', () => {
    const { container } = renderComponent();

    expect(container).toHaveTextContent('서울');
    expect(container).toHaveTextContent('대전');
  });
});
