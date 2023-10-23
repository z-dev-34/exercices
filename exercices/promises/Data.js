export class Data {


    static uppercaseNames(arr) {
        return arr.map((obj) => {
            if (obj.name) {
                obj.name = obj.name.toUpperCase();
            }
            return obj;
        });
    }
    static hashUserId(arr, datetime = new Date()) {
        return arr.map((obj) => {
            if (obj.id) {
                obj.id = this.customHash(obj.id, datetime);
            }
            return obj;
        });
    }
    static customHash(inputString, datetime) {

        // Combine the original string and datetime as a single string
        const combinedString = inputString + datetime.toString();

        let hash = 0;

        for (let i = 0; i < combinedString.length; i++) {
            const char = combinedString.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }

        // Ensure the hash is non-negative
        if (hash < 0) {
            hash = -hash;
        }

        return hash.toString(16); // Convert the hash to a hexadecimal string
    }
}