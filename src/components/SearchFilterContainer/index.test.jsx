import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import SearchFilterContainer from '.';

jest.mock('react-redux');

describe('SearchFilterContainer', () => {
  it('renders region options', () => {
    useSelector.mockImplementation((selector) => selector({ regions: ['서울'] }));
    const { getByLabelText, getByRole } = render(<SearchFilterContainer />);

    expect(getByLabelText('지역')).toBeInTheDocument();
    expect(getByRole('option', { value: '서울' })).toBeInTheDocument();
  });
});
