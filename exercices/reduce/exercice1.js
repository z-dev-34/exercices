import {
    voters,
    wishlist
} from './data.js'

//Turn an array of numbers into a total of all the numbers
export const total = arr => {
    // your code here

}

//console.log(total([1, 2, 3])); // 6

// Turn an array of numbers into a long string of all those numbers.
export const stringConcat = arr => {
    // your code here 

}

//console.log(stringConcat([1, 2, 3])); // "123"

//Turn an array of voter objects into a count of how many people voted
export const totalVotes = arr => {
    // your code here    

}
//console.log(totalVotes(voters)); // 7

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

export const shoppingSpree = arr => {
    // your code here
}

// import wishlist

//console.log(shoppingSpree(wishlist)); // 227005

/*
Given an array of potential voters, return an object representing the results of the vote
Include how many of the potential voters were in the ages 18-25, how many from 26-35,
how many from 36-55, and how many of each of those age ranges actually voted.
The resulting object containing this data should have 6 properties. See the example output at the bottom.
*/


export const voterResults = arr => {
    // your code here

}

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