import { Map, List } from 'immutable';


export function concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  return list1.concat(list2);
};

export function mergeElements(page1, page2) {
  Map(page1).merge(page2);
}