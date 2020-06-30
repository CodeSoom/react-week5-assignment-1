import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Buttons from './Buttons';

describe('Buttons', () => {
  context('with region or category data', () => {
    const regions = ['서울', '부산'];

    it('can be clicked', () => {
      const handleClickChooseValue = jest.fn();

      const { getByText } = render((
        <Buttons
          values={regions}
          onClick={handleClickChooseValue}
        />
      ));

      fireEvent.click(getByText('서울'));

      expect(handleClickChooseValue).toBeCalledWith(1);
    });

    it('renders regions or categories', () => {
      const { container } = render((
        <Buttons
          values={regions}
        />
      ));
      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('부산');
    });
  });
});
