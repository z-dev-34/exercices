import orderById from "../exercices/order/orderById.js";
import orderByName from "../exercices/order/orderByName.js";
import {
    orderbyDateAsc,
    orderbyDateDesc
} from '../exercices/order/orderByDate.js'
import {
    users
} from '../exercices/order/data.js';


describe('sort users', () => {
    it('sort by name', () => {
        const expectedOutput = [{
                id: 1,
                name: 'Alice',
                age: 36,
                date: '2011-10-10'
            },
            {
                id: 4,
                name: 'Amal',
                age: 23,
                date: '2023-04-03'
            },
            {
                id: 3,
                name: 'Bob',
                age: 25,
                date: '2020-02-10'
            },
            {
                id: 2,
                name: 'Eve',
                age: 28,
                date: '2020-01-10'
            }
        ];
        const result = orderByName(users);
        expect(result).toEqual(expectedOutput);
    })
    it('sort by big id', () => {
        const expectedOutput = [{
                id: 4,
                name: 'Amal',
                age: 23,
                date: '2023-04-03'
            },
            {
                id: 3,
                name: 'Bob',
                age: 25,
                date: '2020-02-10'
            },
            {
                id: 2,
                name: 'Eve',
                age: 28,
                date: '2020-01-10'
            },
            {
                id: 1,
                name: 'Alice',
                age: 36,
                date: '2011-10-10'
            }
        ];
        const result = orderById(users);
        expect(result).toEqual(expectedOutput)
    })
    it('sort by date ASC', () => {
        const expectedOutput = [{
                id: 1,
                name: 'Alice',
                age: 36,
                date: '2011-10-10'
            },
            {
                id: 2,
                name: 'Eve',
                age: 28,
                date: '2020-01-10'
            },
            {
                id: 3,
                name: 'Bob',
                age: 25,
                date: '2020-02-10'
            },
            {
                id: 4,
                name: 'Amal',
                age: 23,
                date: '2023-04-03'
            }
        ];
        const result = orderbyDateAsc(users);
        expect(result).toEqual(expectedOutput)
    })
    it('sort by date DESC', () => {
        const expectedOutput = [{
                id: 1,
                name: 'Alice',
                age: 36,
                date: '2011-10-10'
            },
            {
                id: 2,
                name: 'Eve',
                age: 28,
                date: '2020-01-10'
            },
            {
                id: 3,
                name: 'Bob',
                age: 25,
                date: '2020-02-10'
            },
            {
                id: 4,
                name: 'Amal',
                age: 23,
                date: '2023-04-03'
            }
        ];
        const result = orderbyDateDesc(users);
        expect(result).toEqual(expectedOutput)
    })
})