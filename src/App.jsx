import React from 'react';

export default function App() {

  const locationList = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];
  const foodTypeList = ['한식', '중식', '일식', '양식', '분식'];
  const resultList = ['양천주가', '밀면넘어져요'];

  return (
    <>
      <ul>
        {
          locationList.map((location) => (
            <li><button>{location}</button></li>
          ))
        }
      </ul>

      <ul>
        {
          foodTypeList.map((foodType) => (
            <li><button>{foodType}</button></li>
          ))
        }
      </ul>

      <ul>
        {
          resultList.map((result) => (
            <li>{result}</li>
          ))
        }
      </ul>
    </>
  );
}
