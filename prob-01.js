function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  const fine = fare + fare * (20 / 100) + 30;
  return Number(fine.toFixed(2));
}

const fee = totalFine(269);
console.log(fee);
