import { fireEvent, render } from '@testing-library/react';
import given from 'given2';
import 'given2/setup';

import Button from './Button';

describe('Button', () => {
  given('value', () => '서울');
  given('buttonName', () => '서울');
  given('isSelected', () => () => true);
  given('emptyMessage', () => '정보가 없어요!');

  const handleButtonClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderButton() {
    return render((
      <Button
        name={given.buttonName}
        value={given.value}
        isSelected={given.isSelected}
        onButtonClick={handleButtonClick}
      />
    ));
  }

  it('updates value when clicked', () => {
    const { getByText } = renderButton();

    fireEvent.click(getByText(/서울/));

    expect(handleButtonClick).toBeCalledWith({ value: '서울' });
  });

  context('when button\'s value is selected', () => {
    given('isSelected', () => () => true);

    it('renders "(V)"', () => {
      const { queryByText } = renderButton();

      expect(queryByText(/(V)/)).not.toBe(null);
    });
  });

  context('when button\'s value is NOT selected', () => {
    given('isSelected', () => () => false);

    it('doesn\'t renders "(V)"', () => {
      const { queryByText } = renderButton();

      expect(queryByText(/(V)/)).toBe(null);
    });
  });
});
