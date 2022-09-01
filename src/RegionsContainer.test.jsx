import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

describe('<RegionsContainer />', () => {
  it('renders regions', () => {
    const { getByText } = render((
      <RegionsContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('부산')).not.toBeNull();
  });
});
