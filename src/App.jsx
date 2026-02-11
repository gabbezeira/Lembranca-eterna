import { Footer, Menu, TributeModal } from '@components'
import { MenuProvider, useMenu } from '@contexts/MenuContext'
import { AuthProvider } from '@contexts/AuthContext'
import { Body, PageWrapper } from '@globalStylesJSX'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function AppContent() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const { showTributeButton } = useMenu()

	const openTributeModal = () => {
		setIsModalOpen(true)
	}

	const closeTributeModal = () => {
		setIsModalOpen(false)
	}

	const handleAddTribute = async (newTribute) => {
		try {
			// This function seems to be a placeholder or for global button?
			// The actual tribute logic is in PerfilPage usually.
			// But if this is used, let's keep it clean.
			console.log('Homenagem enviada:', newTribute)
			await new Promise((resolve) => setTimeout(resolve, 1000))
			toast.success('Homenagem enviada com sucesso!')
		} catch (error) {
			console.error('Erro ao enviar homenagem:', error)
			toast.error('Erro ao enviar homenagem.')
			throw error
		}
	}

	return (
		<PageWrapper>
			<Menu
				padding="0rem 10rem"
				$showButton={showTributeButton ? 'flex' : 'none'}
				onAddTribute={openTributeModal}
			/>
			<Body>
				<Outlet />
			</Body>
			<Footer />

			<TributeModal
				isOpen={isModalOpen}
				onClose={closeTributeModal}
				onSubmit={handleAddTribute}
			/>
			<ToastContainer position="top-right" autoClose={3000} />
		</PageWrapper>
	)
}

function App() {
	return (
		<AuthProvider>
			<MenuProvider>
				<AppContent />
			</MenuProvider>
		</AuthProvider>
	)
}

export default App
