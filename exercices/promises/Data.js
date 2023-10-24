// create static class Data
export class Data {
  static uppercaseNames(arr) {
    // return array with all users with names uppercases
    return arr.reduce((acc, curr) => {
      const uppername = curr.name.toUpperCase();
      acc.push({ id: curr.id, name: uppername });
      return acc;
    }, []);
  }
  static hashUserId(arr, datetime) {
    // return id de l'obect hashé
  }
  static customHash(inputString, datetime) {
    // hash le id avec la date time et retourné la valeur en string
  }
}
