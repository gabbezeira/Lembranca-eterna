import {
	AdminFilters,
	CreateUserModal,
	DeleteUserModal,
	Footer,
	Loader,
	Menu,
	NoListResult,
	Pagination,
} from '@components'
import { UserCard } from '@components/usersCard'
import {
	AdminPageWrapper,
	Container,
	NoResultContainer,
	SearchContainer,
	SearchInput,
	StyledUserList,
} from './styles'
import { Search } from 'lucide-react'
import { useEffect, useState, useMemo } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../contexts/AuthContext'
import api from '../../services/api'

export function AdminPainel() {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(true)
	const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false)
	const [selectedUser, setSelectedUser] = useState(null)
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
	const [userToDelete, setUserToDelete] = useState(null)
	const [searchTerm, setSearchTerm] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [filterStatus, setFilterStatus] = useState('all')
	const [filterPlan, setFilterPlan] = useState('all')
	const [filterDate, setFilterDate] = useState('')
	const [sortBy, setSortBy] = useState('newest')
	const itemsPerPage = 5

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setLoading(true)
				const response = await api.get('/admin/users')
				setUsers(response.data)
				setLoading(false)
			} catch (error) {
				console.error('Erro ao carregar usuários:', error)
				toast.error('Erro ao carregar lista de usuários.')
				setUsers([])
				setLoading(false)
			}
		}

		fetchUsers()
	}, [])

	const handleOpenCreateUserModal = () => {
		setIsCreateUserModalOpen(true)
	}

	const handleCloseCreateUserModal = () => {
		setIsCreateUserModalOpen(false)
		setSelectedUser(null)
	}

	const handleSaveUser = async (formData) => {
		try {
			setLoading(true)
			if (selectedUser) {
				// Edit
				await api.put(
					`/admin/users/${selectedUser.uid || selectedUser.id}`,
					formData,
				)
				toast.success('Usuário atualizado com sucesso!')
			} else {
				// Create
				await api.post('/admin/users', {
					name: formData.responsible,
					...formData,
					role: 'FAMILY',
				})
				toast.success('Usuário criado com sucesso!')
			}
			// Refresh list
			const response = await api.get('/admin/users')
			setUsers(response.data)
			handleCloseCreateUserModal()
		} catch (error) {
			console.error('Erro ao salvar usuário:', error)
			const errorMessage =
				error.response?.data?.error ||
				'Erro ao salvar usuário. Verifique os dados.'
			toast.error(errorMessage)
		} finally {
			setLoading(false)
		}
	}

	const handleLink = (userData) => {
		// Copy link to clipboard
		const link = `${window.location.origin}/memorial/${userData.code}`
		navigator.clipboard.writeText(link)
		toast.success('Link do memorial copiado!')
	}

	const handleEdit = (userData) => {
		setSelectedUser(userData)
		setIsCreateUserModalOpen(true)
	}

	const handleDelete = (userData) => {
		setUserToDelete(userData)
		setIsDeleteModalOpen(true)
	}

	const handleConfirmDelete = async () => {
		if (userToDelete) {
			try {
				await api.delete(`/admin/users/${userToDelete.uid}`)
				setUsers(users.filter((user) => user.uid !== userToDelete.uid))
				setIsDeleteModalOpen(false)
				setUserToDelete(null)
				toast.success('Usuário excluído com sucesso!')
			} catch (error) {
				console.error('Erro ao excluir usuário:', error)
				toast.error('Erro ao excluir usuário.')
			}
		}
	}

	const handleCloseDeleteModal = () => {
		setIsDeleteModalOpen(false)
		setUserToDelete(null)
	}

	const [searchLoading, setSearchLoading] = useState(false)
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearchTerm(searchTerm)
		}, 500)

		return () => {
			clearTimeout(handler)
		}
	}, [searchTerm])

	useEffect(() => {
		if (searchTerm !== debouncedSearchTerm) {
			setSearchLoading(true)
		} else {
			if (searchTerm) {
				setSearchLoading(true)
				setTimeout(() => {
					setSearchLoading(false)
				}, 500)
			} else {
				setSearchLoading(false)
			}
		}
	}, [searchTerm, debouncedSearchTerm])

	const filteredUsers = useMemo(() => {
		let result = users.filter(
			(user) =>
				user.responsible
					.toLowerCase()
					.includes(debouncedSearchTerm.toLowerCase()) ||
				user.email.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
				(user.deceasedName && user.deceasedName.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) ||
				(user.code && user.code.toString().includes(debouncedSearchTerm)),
		)

		if (filterStatus === 'incomplete') {
			result = result.filter(
				(user) =>
					user.deceasedName === 'Atualize o Cadastro' ||
					user.name === 'Atualize o Cadastro',
			)
		} else if (filterStatus === 'expired') {
			const todayStr = new Date().toISOString().split('T')[0]
			result = result.filter(
				(user) => user.plan === 'premium' && user.validUntil && user.validUntil < todayStr
			)
		}

		if (filterPlan !== 'all') {
			result = result.filter((user) => user.plan === filterPlan)
		}

		if (filterDate) {
			result = result.filter((user) => {
				if (!user.validUntil) return false;
				// user.validUntil format is usually YYYY-MM-DD
				return user.validUntil.startsWith(filterDate);
			})
		}

		result.sort((a, b) => {
			if (sortBy === 'newest') {
				return new Date(b.created_at || 0) - new Date(a.created_at || 0)
			}
			if (sortBy === 'oldest') {
				return new Date(a.created_at || 0) - new Date(b.created_at || 0)
			}
			if (sortBy === 'alpha_resp') {
				return a.responsible.localeCompare(b.responsible)
			}
			if (sortBy === 'alpha_dec') {
				const nameA =
					a.deceasedName === 'Atualize o Cadastro' ? 'ZZZ' : a.deceasedName
				const nameB =
					b.deceasedName === 'Atualize o Cadastro' ? 'ZZZ' : b.deceasedName
				return nameA.localeCompare(nameB)
			}
			return 0
		})

		return result
	}, [users, debouncedSearchTerm, filterStatus, sortBy, filterPlan, filterDate])

	useEffect(() => {
		setCurrentPage(1)
	}, [filterStatus, sortBy, debouncedSearchTerm, filterPlan, filterDate])

	const totalPages = Math.ceil(filteredUsers.length / itemsPerPage)
	const currentUsers = filteredUsers.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	)

	const { logout } = useAuth()

	const handleLogout = async () => {
		try {
			await logout()
			toast.success('Logout realizado com sucesso!')
		} catch (error) {
			console.error('Erro ao fazer logout:', error)
			toast.error('Erro ao sair.')
		}
	}

	const handleSupport = () => {
		const message = 'Vim pelo Lembrança Eterna e preciso de suporte'
		const phoneNumber = '5534999750121'
		const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
		window.open(link, '_blank')
	}

	return (
		<AdminPageWrapper>
			<Menu
				userType="admin"
				onCreateUser={handleOpenCreateUserModal}
				position="relative"
				onLogout={handleLogout}
				onSupport={handleSupport}
			/>
			<Container>
				<SearchContainer>
					<Search className="search-icon" size={20} />
					<SearchInput
						type="text"
						placeholder="Buscar por nome, email ou código..."
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value)
							setCurrentPage(1)
						}}
					/>
					<AdminFilters
						filterStatus={filterStatus}
						setFilterStatus={setFilterStatus}
						sortBy={sortBy}
						setSortBy={setSortBy}
						filterPlan={filterPlan}
						setFilterPlan={setFilterPlan}
						filterDate={filterDate}
						setFilterDate={setFilterDate}
					/>
				</SearchContainer>

				<StyledUserList>
					{searchLoading || loading ? (
						<Loader />
					) : currentUsers.length > 0 ? (
						<>
							{currentUsers.map((user) => (
								<UserCard
									key={user.id}
									userData={user}
									onLink={handleLink}
									onEdit={handleEdit}
									onDelete={handleDelete}
								/>
							))}
						</>
					) : debouncedSearchTerm ? (
						<NoResultContainer>
							<h3>Nenhum usuário encontrado para "{debouncedSearchTerm}"</h3>
						</NoResultContainer>
					) : (
						<NoListResult onCreateUser={handleOpenCreateUserModal} />
					)}
				</StyledUserList>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			</Container>

			<CreateUserModal
				isOpen={isCreateUserModalOpen}
				onClose={handleCloseCreateUserModal}
				user={selectedUser}
				onSubmit={handleSaveUser}
			/>

			<DeleteUserModal
				isOpen={isDeleteModalOpen}
				onClose={handleCloseDeleteModal}
				onConfirm={handleConfirmDelete}
				userName={userToDelete?.responsible}
			/>

			<Footer />
		</AdminPageWrapper>
	)
}
