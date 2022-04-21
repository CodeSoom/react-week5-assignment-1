import { fireEvent, render } from '@testing-library/react';
import given from 'given2';
import 'given2/setup';

import regions from '../fixtures/regions';

import Button from './Button';

describe('Button', () => {
  given('value', () => 'name');
  given('button', () => ({ id: 1, name: '서울' }));
  given('currentButtonInfo', () => '서울');
  given('emptyMessage', () => '정보가 없어요!');

  const handleButtonClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderButton() {
    return render((
      <Button
        value={given.value}
        currentButtonInfo={given.currentButtonInfo}
        button={given.button}
        onButtonClick={handleButtonClick}
      />
    ));
  }

  it('updates value when clicked', () => {
    const { getByText } = renderButton();

    fireEvent.click(getByText(/서울/));

    expect(handleButtonClick).toBeCalledWith({ value: '서울' });
  });

  context('with currentButtonInfo', () => {
    given('buttonButton', () => regions);
    given('currentButtonInfo', () => '서울');

    it('renders "(V)" when region name is match to currentButtonInfo', () => {
      const { queryByText } = renderButton();

      expect(queryByText(/(V)/)).not.toBe(null);
    });
  });

  context('without currentButtonInfo', () => {
    given('buttonButton', () => regions);
    given('currentButtonInfo', () => undefined);

    it('doesn\'t renders "(V)"', () => {
      const { queryByText } = renderButton();

      expect(queryByText(/(V)/)).toBe(null);
    });
  });
});
