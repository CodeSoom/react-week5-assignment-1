import { render } from '@testing-library/react';
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
        onButtonClick={dispatch}
      />
    ));
  }

  context('with regions', () => {
    given('buttonList', () => [{
      id: 1,
      name: '서울',
    }]);

    it('renders regions', () => {
      const { container } = renderButtons();

      expect(container).toHaveTextContent(/서울/);
    });
  });

  context('with categories', () => {
    given('buttonList', () => [{
      id: 1,
      name: '서울',
    }]);

    it('renders regions', () => {
      const { container } = renderButtons();

      expect(container).toHaveTextContent(/서울/);
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
