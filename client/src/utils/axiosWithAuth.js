import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: token 
    }
  });
};

// set up basic axiosWithAuth template

// line 4 - getting token from local storage. when we login we are setting the token we get from our API to local storage

//line 6 - axios.create CREATES a new instance of axios with a custom config of your choice

// line 7 - baseURL allows you to not have to type in full URL name when calling axiosWithAuth