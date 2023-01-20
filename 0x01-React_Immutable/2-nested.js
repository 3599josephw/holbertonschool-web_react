import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  let value = Map(object);
  for (let i = 0; i < array.length; i++) {
    value = mappedObj.get(array[i]);
  }
  return value;
}
