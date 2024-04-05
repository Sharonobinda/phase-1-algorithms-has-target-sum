function hasTargetSum(array, target) {
  // Write your algorithm here
  hasTargetSum([5, 7, 13, 4, 11, 6], 12);
// returns true, since 5 and 7 add up to 12

hasTargetSum([20, 18, 3, 5, 30], 25);
// returns true, since 20 and 5 add up to 25

hasTargetSum([3, 8, 7], 12);
// returns false, since no pair of numbers adds up to 12
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 7, 13, 4, 11, 6], 12));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([20, 18, 3, 5, 30], 25));

  console.log("");

  console.log("Expecting: false");

  console.log("=>", hasTargetSum([3, 8, 7], 12));
}

module.exports = hasTargetSum;
