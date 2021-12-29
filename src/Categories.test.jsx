import { render } from '@testing-library/react';

import Categories from './Categories';

jest.mock('react-redux');

describe('Categories', () => {
  context('with categories', () => {
    it('render "category" buttons', () => {
      const categories = [
        { id: 1, name: '한식' },
        { id: 2, name: '양식' },
        { id: 3, name: '일식' },
      ];

      const { getByRole } = render(
        <Categories categories={categories} />,
      );

      categories.forEach((category) => {
        expect(getByRole('button', { name: category.name })).toBeInTheDocument();
      });
    });

    // TODO: Click 버튼
    // 특정 버튼을 클릭할 수 있다?
    // 특정 버튼을 클릭하면, 해당 버튼에 V 버튼이 추가된다?
    // it('clicks the button,  ');
  });

  context('without categories', () => {
    it('noting render', () => {
      const { container } = render(
        <Categories categories={[]} />,
      );

      expect(container).toBeEmptyDOMElement();
    });
  });
});
