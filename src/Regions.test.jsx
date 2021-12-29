import { render } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../__fixtures__/regions';

describe('Regions', () => {
  context('with regions', () => {
    it('render "region" buttons', () => {
      const { getByRole } = render(
        <Regions regions={regions} />,
      );

      regions.forEach((region) => {
        expect(getByRole('button', { name: region.name })).toBeInTheDocument();
      });
    });

    // TODO: 버튼을 클릭하면 해당 버튼 선택 표시 및 상태 저장? (근데 여기서 상태 저장 체크는 아님)
    // 버튼 선택 된 것 확인은 여기서? 아니면 다른 곳에서 처리해야하나?
  });

  context('without regions', () => {
    it('noting render', () => {
      const { container } = render(
        <Regions regions={[]} />,
      );

      expect(container).toBeEmptyDOMElement();
    });
  });
});
