import { fireEvent, render } from '@testing-library/react';
import given from 'given2';
import 'given2/setup';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

import Buttons from './Buttons';

describe('Buttons', () => {
  given('value', () => 'name');
  given('buttonList', () => regions);
  given('currentButtonInfo', () => '서울');
  given('emptyMessage', () => '정보가 없어요!');

  const handleButtonClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderButtons() {
    return render((
      <Buttons
        value={given.value}
        buttonList={given.buttonList}
        currentButtonInfo={given.currentButtonInfo}
        emptyMessage={given.emptyMessage}
        onButtonClick={handleButtonClick}
      />
    ));
  }

  describe('Buttons for regions', () => {
    given('value', () => 'name');
    given('currentButtonInfo', () => '');
    given('emptyMessage', () => '지역이 없어요!');
    given('buttonList', () => regions);

    context('with buttonList', () => {
      given('buttonList', () => regions);

      it('renders regions', () => {
        const { container } = renderButtons();

        expect(container).toHaveTextContent(/서울/);
        expect(container).toHaveTextContent(/대전/);
      });

      it('updates regionName when clicks the region button', () => {
        const { getByText } = renderButtons();

        fireEvent.click(getByText('대전'));

        expect(handleButtonClick).toBeCalledWith({ value: '대전' });
      });
    });

    context('without buttonList', () => {
      given('buttonList', () => []);

      it('renders "지역이 없어요!"', () => {
        const { container } = renderButtons();

        expect(container).toHaveTextContent(/지역이 없어요!/);
      });
    });

    context('with emptyMessage', () => {
      given('buttonList', () => []);
      given('emptyMessage', () => '지역이 없어요!');

      it('renders "지역이 없어요!"', () => {
        const { container } = renderButtons();

        expect(container).toHaveTextContent(/지역이 없어요!/);
      });
    });

    context('without emptyMessage', () => {
      given('buttonList', () => []);
      given('emptyMessage', () => undefined);

      it('renders "정보가 없어요!"', () => {
        const { container } = renderButtons();

        expect(container).toHaveTextContent(/정보가 없어요!/);
      });
    });

    context('with currentButtonInfo', () => {
      given('buttonList', () => regions);
      given('currentButtonInfo', () => '서울');

      it('renders "(V)" when region name is match to currentButtonInfo', () => {
        const { queryByText } = renderButtons();

        expect(queryByText(/(V)/)).not.toBe(null);
      });
    });
    context('without currentButtonInfo', () => {
      given('buttonList', () => regions);
      given('currentButtonInfo', () => undefined);

      it('doesn\'t renders "(V)"', () => {
        const { queryByText } = renderButtons();

        expect(queryByText(/(V)/)).toBe(null);
      });
    });
  });

  describe('Buttons for categories', () => {
    given('value', () => 'id');
    given('buttonList', () => categories);
    given('currentButtonInfo', () => -1);
    given('emptyMessage', () => '카테고리가 없어요!');

    context('with categories', () => {
      it('renders categories', () => {
        const { container } = renderButtons();

        expect(container).toHaveTextContent(/한식/);
        expect(container).toHaveTextContent(/일식/);
      });

      it('updates categoryId when clicks the category button', () => {
        const { getByText } = renderButtons();

        fireEvent.click(getByText('일식'));

        expect(handleButtonClick).toBeCalledWith({ value: 2 });
      });
    });
  });

  context('without buttons', () => {
    given('buttonList', () => []);

    it('renders "정보가 없어요!"', () => {
      const { container } = renderButtons();

      expect(container).toHaveTextContent(/정보가 없어요!/);
    });
  });
});
