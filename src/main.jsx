import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App'
import { AdminLogin } from './pages/AdminLogin'
import { AdminPainel } from './pages/AdminPainel'
import { ClientPainel } from './pages/ClientPainel'
import { FamilyLogin } from './pages/FamilyLogin'
import { Home } from './pages/Home'
import { PerfilPage } from './pages/PerfilPage'
import { PrivateRoute } from './components'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="/home" replace />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/memorial/:code',
		element: <PerfilPage />,
	},
	// Leaving /perfil for dev/testing or removing?
	// The prompt implies we want to access via code.
	// Let's keep /perfil as a fallback or remove it to enforce code usage.
	// I'll replace it with the dynamic one.
	{
		path: 'admin',
		element: <AdminLogin />,
	},
	{
		path: 'login',
		element: <FamilyLogin />,
	},
	{
		path: 'adminPainel',
		element: (
			<PrivateRoute role="ADMIN">
				<AdminPainel />
			</PrivateRoute>
		),
	},
	{
		path: 'clientPainel',
		element: (
			<PrivateRoute role="FAMILY">
				<ClientPainel />
			</PrivateRoute>
		),
	},
])

import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
			<ToastContainer position="bottom-right" autoClose={3000} />
		</AuthProvider>
	</React.StrictMode>,
)
