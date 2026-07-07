import axios from 'axios';

export const api = axios.create({
    baseURL:'http://localhost:1515/api'
})

api.interceptors.request.use((config) => {
    
    const token = 
        localStorage.getItem('token') ||
        sessionStorage.getItem('token');
    
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    
    (error) =>{
        return Promise.reject(error);
    }
)