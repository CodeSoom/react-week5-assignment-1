export default function updateSelectedLocation(locationName) {
  return {
    type: 'undateSelectedLocation',
    payload: { locationName },
  };
}
