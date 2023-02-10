import { normalize, schema } from 'normalizr';


const names = new schema.Entity("names");
const credit = new schema.Entity("credits");
const courses = new schema.Entity("courses", {
  names, credit
});

export default function courseNormalizer(data) {
  normalize(data, [courses]);
}
