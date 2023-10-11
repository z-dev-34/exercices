import axios from "axios"

const fetchData = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data).then(data => data)
    console.log(data)
}
export default fetchData;