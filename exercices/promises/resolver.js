import { Data } from "./Data.js";
import { fetchData } from "./fetchData.js";

export const usersToUppercase = async (promise) => {
  // return all user names data api of uppercase
  const result = await promise;
  const data = Data.uppercaseNames(result);
  return data;
};
export const userHashedById = async (promise, datetime) => {
  // return all user id data api of uppercase
  const result = await promise;
  const arr = Data.uppercaseNames(result);
  const data = Data.hashUserId(arr);
  return data;
};
