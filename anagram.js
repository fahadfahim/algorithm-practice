function validAnagram(first, second) {
  let trimFirst = first.toLowerCase()
  let trimSecond = second.toLowerCase()
  console.log(trimSecond);
  if (trimFirst.length !== trimSecond.length) {
    return false;
  }
  const lookup = {}

  for (let i = 0; i < trimFirst.length; i++) {
    let letter = trimFirst[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup);
  for (let i = 0; i < trimSecond.length; i++) {
    let letter = trimSecond[i]

    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram('helloo', 'ohellO'));