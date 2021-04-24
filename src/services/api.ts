import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333/'
      : 'https://back-4jobs.herokuapp.com/',
});

export { api };
