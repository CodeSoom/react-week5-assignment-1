const updateField = ({ field, value }) => ({
  type: 'UPDATE_FIELD',
  payload: { field, value },
});

export default updateField;
