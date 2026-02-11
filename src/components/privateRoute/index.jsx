import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Loader } from '@components'

export function PrivateRoute({ children, role }) {
	const { user, loading } = useAuth()

	if (loading) {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					width: '100vw',
				}}
			>
				<Loader />
			</div>
		)
	}

	if (!user) {
		// Redirect to login based on intended role or default
		return <Navigate to={role === 'ADMIN' ? '/admin' : '/login'} replace />
	}

	if (role && user.role !== role) {
		// User logged in but wrong role
		// Redirect to their appropriate dashboard or home
		if (user.role === 'ADMIN') return <Navigate to="/adminPainel" replace />
		if (user.role === 'FAMILY') return <Navigate to="/clientPainel" replace />
		return <Navigate to="/" replace />
	}

	return children
}
