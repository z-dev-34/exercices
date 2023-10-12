import {
    filterByAge,
    filterOnlyVoted
} from "../exercices/filter/filters";
import {
    voters
} from '../exercices/filter/data.js';

const outputFilterByAge = [{
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    }
];
const outputFilterVoter = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    }
]
describe("filter all array", () => {
    it('filter users by their age between 18 and 25,finaly get array with user order by age ASC ', () => {
        const result = filterByAge(voters)
        expect(result).toEqual(outputFilterByAge);
    })
    it('get only user who voted', () => {
        const result = filterOnlyVoted(voters)
        expect(result).toEqual(outputFilterVoter);
    })
})