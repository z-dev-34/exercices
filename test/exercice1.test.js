import {
    total,
    stringConcat,
    totalVotes,
    shoppingSpree,
    voterResults
} from "../exercices/reduce/exercice1.js";
import {
    voters,
    wishlist
} from '../exercices/reduce/data.js'
describe('test exercie 1', () => {
    it('Turn an array of numbers into a total of all the numbers', () => {
        const result = total([1, 2, 3]);
        expect(result).toBe(6)
    })
    it('Turn an array of numbers into a long string of all those numbers', () => {
        const result = stringConcat([1, 2, 3]);
        expect(result).toBe("123");
    })
    it('Turn an array of voter objects into a count of how many people voted', () => {
        const result = totalVotes(voters);
        expect(result).toBe(7);
    })
    it('Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once', () => {
        const result = shoppingSpree(wishlist);
        expect(result).toBe(227005);
    })
    it("Given an array of potential voters, return an object representing the results of the vote Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted.The resulting object containing this data should have 6 properties", () => {
        const result = voterResults(voters);
        expect(result).toEqual({
            numYoungVotes: 1,
            numYoungPeople: 4,
            numMidVotesPeople: 3,
            numMidsPeople: 4,
            numOldVotesPeople: 3,
            numOldsPeople: 4
        });
    })
})