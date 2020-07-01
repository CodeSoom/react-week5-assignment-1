const check = ({ id, name }, checkedId) => {
  const element = { id, name: name.replace('(v)', '') };
  if (element.id === checkedId) {
    element.name += '(v)';
  }
  return element;
};

export default check;
