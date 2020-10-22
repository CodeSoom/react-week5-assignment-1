import React from 'react';

import RegionsContainer from './container/RegionsContainer';

export default function App() {
  // TODO: 'https://eatgo-customer-api.ahastudio.com/regions' 에서 지역 리스트를 가져온다.
  // TODO: 'https://eatgo-customer-api.ahastudio.com/categories' 에서 음식분류 리스트를 가져온다.
  // TODO: 지역 리스트를 그린다.
  // TODO: 음식분류 리스트를 그린다.
  // TODO: 지역을 클릭하면 '(V)' 문자열을 추가한다.
  // TODO: 음식분류를 클릭하면 '(V)' 문자열을 추가한다.
  // TODO: 지역과 음식분류가 모두 클릭 된 뒤 다른 클릭 이벤트가 1초동안 없으면
  //       `https://eatgo-customer-api.ahastudio.com/restaurants?region=${region}&category=${category}`
  //       에서 음식점 리스트를 가져온다.
  // TODO: 음식점 리스트를 그린다.
  return (
    <div>
      <RegionsContainer />

      <ul>
        <li>
          <button type="button" name="한식">한식(V)</button>
          <button type="button" name="중식">중식</button>
        </li>
      </ul>

      <ul>
        <li>양천주가</li>
        <li>한국식 초밥</li>
      </ul>
    </div>
  );
}
