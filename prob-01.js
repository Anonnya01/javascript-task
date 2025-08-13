function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0 ) {
    return "Invalid";
  }
  const fine = fare + fare * (20 / 100) + 30;
  return fine;
}

const fee = totalFine(200);
console.log(fee);
