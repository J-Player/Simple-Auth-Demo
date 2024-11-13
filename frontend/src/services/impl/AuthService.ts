import { ENDPOINTS } from '../../api/axios'
import Service from '../Service'
export class AuthService extends Service {
	async login(username: string, password: string) {
		return await this.axios.post<{ access_token: string }>(`${ENDPOINTS.AUTH}/login`, {
			username,
			password
		})
	}

	async register(username: string, password: string) {
		return await this.axios.post(`${ENDPOINTS.AUTH}/register`, {
			username,
			password
		})
	}

	async logout() {
		return await this.axios.post(`${ENDPOINTS.AUTH}/logout`)
	}
	async refresh() {
		return await this.axios.get(`${ENDPOINTS.AUTH}/refresh`, {
			withCredentials: true
		})
	}
}
