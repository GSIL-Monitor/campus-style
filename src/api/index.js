import Axios from './Axios';

export const createFormApi = params => Axios.post('/api/create/campus', params);