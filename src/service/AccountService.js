import axios from "axios"

export default axios.create({
    baseURL: 'https://accountservicereact.herokuapp.com/account'
  });
