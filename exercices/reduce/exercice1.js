import {
    voters,
    wishlist
} from './data.js'

//Turn an array of numbers into a total of all the numbers
export const total = arr => {
    // your code here
    return arr.reduce((a, b) => a + b)
}

//console.log(total([1, 2, 3])); // 6

// Turn an array of numbers into a long string of all those numbers.
export const stringConcat = arr => {
    // your code here 
    return arr.reduce((a, b) => a.toString() + b.toString())
}

//console.log(stringConcat([1, 2, 3])); // "123"

//Turn an array of voter objects into a count of how many people voted
export const totalVotes = arr =>
    // your code here    
    arr.reduce((count, voter) => {
        if (voter.voted) {
            return count + 1;
        } else {
            return count;
        }
    }, 0)


//console.log(totalVotes(voters)); // 7

//Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

export const shoppingSpree = arr => {
    // your code here
    return arr.reduce((price, wishlist) => {
        return price += wishlist.price
    }, 0)
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
    return arr.reduce(
        (acc, voter) => {
            if (voter.age >= 18 && voter.age <= 25) {
                acc.numYoungPeople += 1;
                if (voter.voted) {
                    acc.numYoungVotes += 1;
                }
            } else if (voter.age >= 26 && voter.age <= 35) {
                acc.numMidsPeople += 1;
                if (voter.voted) {
                    acc.numMidVotesPeople += 1;
                }
            } else if (voter.age >= 36 && voter.age <= 55) {
                acc.numOldsPeople += 1;
                if (voter.voted) {
                    acc.numOldVotesPeople += 1;
                }
            }
            return acc;
        }, {
            numYoungVotes: 0,
            numYoungPeople: 0,
            numMidVotesPeople: 0,
            numMidsPeople: 0,
            numOldVotesPeople: 0,
            numOldsPeople: 0,
        }
    );
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