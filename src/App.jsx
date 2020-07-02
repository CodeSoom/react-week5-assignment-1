import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import AddressListContainer from './AddressListContainer';

import { loadAddressList } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAddressList());
  }, []);

  return (
    <div>
      <AddressListContainer />

      {/* Category List */}
      <ul>
        <li>
          <button type="button">한식</button>
        </li>
      </ul>
    </div>
  );
}
