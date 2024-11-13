import axios from 'axios'

const BASE_URL = process.env.API_URL || 'http://localhost:8080'

export enum ENDPOINTS {
    AUTH = '/auth'
}

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})
