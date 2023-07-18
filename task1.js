function minimumStepsToMakePasswordStrong(password) {
  let steps = 0;
  let hasLowercase = false;
  let hasUppercase = false;
  let hasDigit = false;
  let consecutiveRepeatingCount = 0;
  
  // Condition 1: Check length
  if (password.length < 6) {
    steps += 6 - password.length;
    return steps;
  } else if (password.length > 20) {
    steps += password.length - 20;
    return steps;
  }  
  // Condition 2: Check for lowercase, uppercase, and digit
  for (let char of password) {
    if (char >= 'a' && char <= 'z') {
      hasLowercase = true;
    } else if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    } else if (char >= '0' && char <= '9') {
      hasDigit = true;
    }
  } 
  
  if (!hasLowercase) {
    steps++;
  }
  
  if (!hasUppercase) {
    steps++;
  }
  
  if (!hasDigit) {
    steps++;
  }
  
  // Condition 3: Check for consecutive repeating characters
  for (let i = 2; i < password.length; i++) {
    if (
      password[i] === password[i - 1] &&
      password[i] === password[i - 2]
    ) {
      consecutiveRepeatingCount++;
    }
  }
  
  steps = Math.max(steps, consecutiveRepeatingCount);
  
  return steps;
}

// Output
console.log(minimumStepsToMakePasswordStrong("a"));
console.log(minimumStepsToMakePasswordStrong("aA1"));
console.log(minimumStepsToMakePasswordStrong("Baaba0"));