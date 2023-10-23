import {
    fetchData
} from '../exercices/promises/fetchData.js';
import {
    usersToUppercase,
    userHashedById
} from '../exercices/promises/resolver.js';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// Create a new instance of axios-mock-adapter
const mock = new MockAdapter(axios);
describe('fetchData', () => {
    describe('fetches data from an API', () => {
        // Define the expected response data
        const responseData = [{
                id: 1,
                name: 'Zak'
            },
            {
                id: 2,
                name: 'Remy'
            }
        ];
        let response
        beforeAll(async () => {
            // Mock the Axios GET request to return the expected response data
            mock.onGet('https://jsonplaceholder.typicode.com/users').reply(200, responseData);
            response = await fetchData();
        });
        afterAll(() => {
            // Clear the Axios mock adapter after all tests are done
            mock.reset();
        });
        // Call the API function
        it('fetches successfully', () => {
            // Expect the result to match the expected response data
            expect(response).toEqual(responseData);
        })
        it('get all users name of uppercase', async () => {
            const outputData = [{
                    id: 1,
                    name: 'ZAK'
                },
                {
                    id: 2,
                    name: 'REMY'
                }
            ];
            const promiseData = Promise.resolve(response)
            const result = await usersToUppercase(promiseData)
            expect(result).toEqual(outputData);
        })
        it.skip('hashed users id', async () => {
            const outputData = [{
                    id: '2b8bfde2a',
                    name: 'ZAK'
                },
                {
                    id: '1c51e1cb',
                    name: 'REMY'
                }
            ];
            const promiseData = Promise.resolve(response)
            const datetime = new Date('2023-01-15T12:30:00');
            const result = await userHashedById(promiseData, datetime)
            expect(result).toEqual(outputData);
        })

    });
    describe('handles API request errors', () => {
        // Mock the Axios GET request to simulate an error (e.g., 404 Not Found)
        mock.onGet('https://api.example.com/data').reply(404);

        // Call the API function
        it('fetches error', async () => {
            try {
                await fetchData();
            } catch (error) {
                // Expect an error to be thrown
                expect(error).toBeInstanceOf(Error);
            }
        })
    });

})