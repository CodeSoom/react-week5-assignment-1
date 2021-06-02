expect.extend({
  toBeArrayOfObjectsWith(received, ...keys) {
    const hasValidProperties = (object) => keys.reduce(
      (
        accumulator, current,
      ) => accumulator && Object.prototype.hasOwnProperty.call(object, current),
      true,
    );

    const failingElement = received.reduce((accumulator, current) => {
      if (!hasValidProperties(current)) {
        return current;
      }

      return accumulator;
    }, null);

    return (failingElement === null)
      ? {
        pass: true,
        message: () => (`expected ${this.utils.printReceived(failingElement)} to not has ${this.utils.printExpected(keys.join(', '))} as property`),
      }

      : {
        pass: false,
        message: () => (`expected ${this.utils.printReceived(failingElement)} to has ${this.utils.printExpected(keys.join(', '))} as property`),
      };
  },
});
