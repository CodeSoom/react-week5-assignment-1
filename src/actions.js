export default function updateSelectedLocation(locationName) {
  return {
    type: 'updateSelectedLocation',
    payload: { locationName },
  };
}
