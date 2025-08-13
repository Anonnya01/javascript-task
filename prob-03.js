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

  let total2 = player2.foul + player2.cardY + player2.cardR;

  if (total1 > total2) {
    return player2.name;
  } else if (total1 == total2) {
    return "Tie";
  } else {
    return player1.name;
  }
}

const value = bestTeam(
  { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
  { name: "Sweden", foul: 8, cardY: 4, cardR: 1 }
);

console.log(value);
