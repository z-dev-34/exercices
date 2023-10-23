import axios from "axios"
export const fetchData = async () => {
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data).then(data => data)
        return data;
    } catch (e) {
        console.error(e)
    }

}