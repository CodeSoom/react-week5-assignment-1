import LocationContainer from './LocationContainer';

export default function App() {
  return (
    <>
      <h1>Restaurants</h1>
      <h2>Location</h2>
      <LocationContainer />
      <h2>Category</h2>
      <ul>
        <li>한식</li>
        <li>분식</li>
      </ul>
    </>
  );
}
