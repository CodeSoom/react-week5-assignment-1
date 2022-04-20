import { fireEvent, render } from '@testing-library/react';
import given from 'given2';
import 'given2/setup';

import { useDispatch } from 'react-redux';

import Buttons from './Buttons';

describe('Buttons', () => {
  given('value', () => 'name');
  given('buttonList', () => [{
    id: 1,
    name: '서울',
  }]);
  given('currentButtonInfo', () => '서울');
  given('emptyMessage', () => '정보가 없어요!');

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

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
    given('buttonList', () => [{
      id: 1,
      name: '서울',
    }, {
      id: 2,
      name: '대전',
    }]);

    context('with buttonList', () => {
      given('buttonList', () => [{
        id: 1,
        name: '서울',
      }, {
        id: 2,
        name: '대전',
      }]);

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
  });

  describe('Buttons for categories', () => {
    given('value', () => 'id');
    given('buttonList', () => [{
      id: 1,
      name: '한식',
    }, {
      id: 2,
      name: '중식',
    }]);
    given('currentButtonInfo', () => -1);
    given('emptyMessage', () => '카테고리가 없어요!');

    context('with categories', () => {
      it('renders categories', () => {
        const { container } = renderButtons();

        expect(container).toHaveTextContent(/한식/);
        expect(container).toHaveTextContent(/중식/);
      });

      it('updates categoryId when clicks the category button', () => {
        const { getByText } = renderButtons();

        fireEvent.click(getByText('중식'));

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
