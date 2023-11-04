import axios from "axios";
export const fetchData = async () => {
  // utiliser axios pour recuperer la data de l'api (https://jsonplaceholder.typicode.com/users) en verbe get
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = await response.data;
  return data;
};
