function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }

  const pass = [];
  const fail = [];
  let sum = 0;
  //   -----avg-------//

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  const average = sum / marks.length;
  const round = Math.floor(average);

  // ---------pass/fail--------//
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > 40) {
      pass.push(marks[i]);
    } else if (marks[i] <= 40) {
      fail.push(marks[i]);
    }
  }

  const result = { finalScore: round, pass: pass.length, fail: fail.length };
  return result;
}

const total = resultReport([98, 30, 40, 50]);
console.log(total);
