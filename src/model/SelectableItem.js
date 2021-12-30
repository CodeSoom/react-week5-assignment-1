export default class SelectableItem {
  constructor(item) {
    Object.assign(this, item);
    this.selected = item.selected || false;
  }

  get content() {
    return `${this.name}${this.selected ? '(V)' : ''}`;
  }
}
