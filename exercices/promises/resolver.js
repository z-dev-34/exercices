import {
    Data
} from './Data.js';

export const usersToUppercase = async (promise) => {
    const data = await promise
    return Data.uppercaseNames(data);
}
export const userHashedById = async (promise, datetime) => {
    const data = await promise
    return Data.hashUserId(data, datetime);
}