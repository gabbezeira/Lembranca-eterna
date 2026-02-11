import { createContext, useContext, useEffect, useState } from 'react'
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				// Here we could fetch additional user data/claims if needed
				// For now, just setting the firebase user object
				currentUser.getIdTokenResult().then((idTokenResult) => {
					currentUser.role = idTokenResult.claims.role || 'FAMILY'
					setUser(currentUser)
					setLoading(false)
				})
			} else {
				setUser(null)
				setLoading(false)
			}
		})

		return () => unsubscribe()
	}, [])

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logout = () => {
		return signOut(auth)
	}

	return (
		<AuthContext.Provider value={{ user, login, logout, loading }}>
			{!loading && children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
