import { render, fireEvent } from '@testing-library/react';

import SelectorButton from './SelectorButton';

const onClick = jest.fn();

function customRender({
  selectedName,
  name,
}) {
  return render(
    <SelectorButton
      selectedName={selectedName}
      name={name}
      onClick={onClick}
    />,
  );
}

describe('SelectorButton', () => {
  context('with 서울 selected', () => {
    it('서울 has check mark', () => {
      const { queryByText } = customRender({
        selectedName: '서울',
        name: '서울',
      });

      expect(queryByText('서울(V)')).not.toBeNull();
    });

    it('대전 does not have check mark', () => {
      const { queryByText } = customRender({
        selectedName: '서울',
        name: '대전',
      });

      expect(queryByText('대전(V)')).toBeNull();
      expect(queryByText('대전')).not.toBeNull();
    });
  });

  context('with click', () => {
    it('calls onClick function', () => {
      const { queryByText } = customRender({
        selectedName: '서울',
        name: '서울',
      });

      fireEvent.click(queryByText('서울(V)'));

      expect(onClick).toBeCalledWith('서울');
    });
  });
});
