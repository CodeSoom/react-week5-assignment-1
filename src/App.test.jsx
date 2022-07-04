import { fireEvent, render } from '@testing-library/react';

import App from './App';

describe('<App/>', () => {
  const renderApp = () => ((
    render(<App />)
  ));

  const handleClick = jest.fn();

  it('지역 목록이 보임.', () => {
    const { getByText } = renderApp();

    const regions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

    regions.map((region) => expect(getByText(`${region}`)).toBeInTheDocument());
  });

  it('카테고리 목록이 보임.', () => {
    const { getByText } = renderApp();

    const categories = ['한식', '중식', '일식', '양식', '분식'];

    categories.map((category) => expect(getByText(`${category}`)).toBeInTheDocument());
  });

  describe('버튼을 클릭할 때', () => {
    it('handleClcik 함수 호출됨', () => {
      const { getByRole } = renderApp();

      fireEvent.click(getByRole('button'));

      expect(handleClick).toBeCalled();
    });

    it('선택된 버튼에 V표시가 보임', () => {
      const { getByText, container } = renderApp();

      fireEvent.click(getByText('한식'));

      expect(container).toHaveTextContent('한식(V)');
    });
  });
});
