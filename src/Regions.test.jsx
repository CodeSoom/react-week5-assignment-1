import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  context('with region data', () => {
    const regions = [
      { id: 1, name: '서울' },
      { id: 2, name: '부산' },
    ];

    it('can be clicked', () => {
      const handleClick = jest.fn();

      const { getByText } = render((
        <Regions
          values={regions}
          onClick={handleClick}
        />
      ));

      fireEvent.click(getByText('서울'));

      expect(handleClick).toBeCalledTimes(1);
    });

    it('renders regions', () => {
      const { container } = render((
        <Regions
          values={regions}
        />
      ));
      expect(container).toHaveTextContent('서울');
      expect(container).toHaveTextContent('부산');
    });
  });
});
