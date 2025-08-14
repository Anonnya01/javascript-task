function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  const fine = fare + fare * (20 / 100) + 30;
  return Number(fine.toFixed(2));
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const noSpacesStr = str.split(" ").join("");
  return noSpacesStr.toUpperCase();
}

function bestTeam(player1, player2) {
  if (
    typeof player1 !== "object" ||
    typeof player2 !== "object" ||
    Array.isArray(player1) ||
    Array.isArray(player2)
  ) {
    return "Invalid";
  }
  let total1 = player1.foul + player1.cardY + player1.cardR;
  const sum1 = total1;
  let total2 = player2.foul + player2.cardY + player2.cardR;
  const sum2 = total2;
  if (sum1 > sum2) {
    return player2.name;
  } else if (sum1 == sum2) {
    return "Tie";
  } else {
    return player1.name;
  }
}

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

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

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  const average = sum / marks.length;
  const round = Math.floor(average);

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
      pass.push(marks[i]);
    } else if (marks[i] < 40) {
      fail.push(marks[i]);
    }
  }
  const result = { finalScore: round, pass: pass.length, fail: fail.length };
  return result;
}

