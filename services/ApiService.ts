import axios from 'axios'

export const register = async (user: string) => {
  return axios.post('/auth/register', user)
}

/*
Examples 

----- Function With Param -----
const getUser = async (userId: string) => {
    return axios.get("/user/" + userId);
};

----- Function With Query -----
const getAvailableUsers = async (isAvailable: string) => {
    return axios.get("/user?is_available=" + isAvailable);
};
*/
