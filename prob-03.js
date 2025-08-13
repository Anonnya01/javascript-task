function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
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

const value = bestTeam(
{ name: "Germany", foul: 12, cardY: 0, cardR: 0 },
{ name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
);

console.log(value);
