import Axios from 'axios';

Axios.defaults.baseURL = 'http://localhost:4000';

export class User  {
    registration = (userDetails)=>{
        return Axios.post("/registerUser", userDetails);
    };
}