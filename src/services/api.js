import axios from 'axios'
import { auth } from '../config/firebase'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(async (config) => {
	const user = auth.currentUser
	if (user) {
		const token = await user.getIdToken()
		config.headers.Authorization = `Bearer ${token}`
	} else {
		console.warn(
			'API Interceptor: No current user found in firebase auth instance.',
		)
	}
	return config
})

export default api
