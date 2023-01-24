import { Seq } from 'immutable';

export default function printBestStudents(students) {
  let best = {}
  for (let student in students) {
    if (students[student].score > 70) {
      let fName = students[student].firstName
      students[student].firstName = fName.charAt(0).toUpperCase() + fName.slice(1)
      let lName = students[student].lastName
      students[student].lastName = lName.charAt(0).toUpperCase() + lName.slice(1)
      best[student] = students[student];
    }
  }
  console.log(Seq(best).toJS());
}
