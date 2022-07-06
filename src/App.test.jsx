import { fireEvent, render } from '@testing-library/react';

import App from './App';

import { regions, categories } from '../__fixture__/restaurantsInfo';

describe('<App/>', () => {
  const regionNames = regions.map((region) => region.name);
  const categoryNames = categories.map((category) => category.name);

  const renderApp = () => ((
    render(<App />)
  ));

  it('지역 목록이 보임.', () => {
    const { getByText } = renderApp();
    regionNames.forEach((async (name) => {
      await expect(getByText(name)).not.toBeNull();
    }));
  });

  it('카테고리 목록이 보임.', () => {
    const { getByText } = renderApp();
    categoryNames.forEach((async (name) => {
      await expect(getByText(name)).not.toBeNull();
    }));
  });

  it('선택된 버튼에 V표시가 보임', () => {
    const { getByText, container } = renderApp();

    setTimeout(() => {
      fireEvent.click(getByText('한식'));

      expect(container).toHaveTextContent('한식(V)');
    }, 100);
  });
});
