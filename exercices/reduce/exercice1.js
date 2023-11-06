import { voters, wishlist } from "./data.js";

//Turn an array of numbers into a total of all the numbers
export const total = (arr) => {
  return arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
};

//console.log(total([1, 2, 3])); // 6

// Turn an array of numbers into a long string of all those numbers.
export const stringConcat = (arr) => arr.join("");

//console.log(stringConcat([1, 2, 3])); // "123"

//Turn an array of voter objects into a count of how many people voted
export const totalVotes = (arr) => {
  return arr.reduce((acc, curr) => {
    acc += curr.voted === true;
    return acc;
  }, 0);
};
//console.log(totalVotes(voters)); // 7

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

export const shoppingSpree = (arr) => {
  return arr.reduce((acc, curr) => {
    acc += curr.price;
    return acc;
  }, 0);
};

//import wishlist

//console.log(shoppingSpree(wishlist)); // 227005

/*
Given an array of potential voters, return an object representing the results of the vote
Include how many of the potential voters were in the ages 18-25, how many from 26-35,
how many from 36-55, and how many of each of those age ranges actually voted.
The resulting object containing this data should have 6 properties. See the example output at the bottom.
*/

export const voterResults = (arr) => {
  return arr.reduce((acc, curr) => {
    if (curr.age >= 18 && curr.age <= 25) {
      if (acc.numYoungPeople == undefined) {
        acc.numYoungPeople = 1;
      } else {
        acc.numYoungPeople++;
      }
      if (curr.voted) {
        if (acc.numYoungVotes == undefined) {
          acc.numYoungVotes = 1;
        } else {
          acc.numYoungVotes++;
        }
      }
    } else if (curr.age >= 26 && curr.age <= 35) {
      if (acc.numMidsPeople == undefined) {
        acc.numMidsPeople = 1;
      } else {
        acc.numMidsPeople++;
      }
      if (curr.voted) {
        if (acc.numMidVotesPeople == undefined) {
          acc.numMidVotesPeople = 1;
        } else {
          acc.numMidVotesPeople++;
        }
      }
    } else if (curr.age >= 36 && curr.age <= 55) {
      if (acc.numOldsPeople == undefined) {
        acc.numOldsPeople = 1;
      } else {
        acc.numOldsPeople++;
      }
      if (curr.voted) {
        if (acc.numOldVotesPeople == undefined) {
          acc.numOldVotesPeople = 1;
        } else {
          acc.numOldVotesPeople++;
        }
      }
    }
    return acc;
  }, {});
};

// import voters
/*
console.log(voterResults(voters)); // Returned value shown below:
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/
