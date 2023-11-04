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
  static hashUserId(arr, datetime = new Date()) {
    // return id de l'obect hashé
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];

      element.id = Data.customHash(element.id, datetime);
    }
    return arr;
  }

  static customHash(inputString, datetime) {
    // hash le id avec la date time et retourné la valeur en string
    return (inputString * datetime).toString(16);
  }
}
