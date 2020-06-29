module.exports = {
  selectRegion: (region) => {
    return {
      type: 'SELECT_REGION',
      payload: {
        region,
      },
    };
  },
};
