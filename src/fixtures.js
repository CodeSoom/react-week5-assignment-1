import SelectableItem from './model/SelectableItem';

export const locations = [
  { id: 1, name: '서울' },
  { id: 2, name: '대전' },
].map((item) => new SelectableItem(item));

export const categories = [
  { id: 1, name: '한식' },
  { id: 2, name: '양식' },
].map((item) => new SelectableItem(item));

export const restaurants = [{ id: 1, name: '양천주가' }];
