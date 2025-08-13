function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const noSpacesStr = str.split(" ").join("");
  return noSpacesStr.toUpperCase();
}

const words = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
console.log(words);
