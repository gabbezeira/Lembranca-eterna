import { Button, TributeCard, Pagination, Loader } from '@components'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { EmptyMessage, TabContainer, TabTitle, TributesList } from './styles'

export const TributesTab = ({ type = 'pending' }) => {
	const [tributes, setTributes] = useState([])
	const [loading, setLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 5

	const fetchTributes = async () => {
		try {
			const response = await api.get('/family/tributes')
			setTributes(response.data)
		} catch (error) {
			console.error('Erro ao buscar homenagens:', error)
			toast.error('Erro ao carregar homenagens.')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchTributes()
	}, [])

	// Filter by type: 'pending' (backend: PENDING) or 'approved' (backend: APPROVED)
	const filteredTributes = tributes.filter(
		(tribute) =>
			tribute.status === (type === 'pending' ? 'PENDING' : 'APPROVED'),
	)

	// Pagination Logic
	const totalPages = Math.ceil(filteredTributes.length / itemsPerPage)
	const currentTributes = filteredTributes.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	)

	// Reset to page 1 if filtering changes significantly reduce count
	useEffect(() => {
		if (currentPage > totalPages && totalPages > 0) {
			setCurrentPage(1)
		}
	}, [filteredTributes.length, totalPages, currentPage])

	const handleStatusUpdate = async (id, status) => {
		try {
			await api.put(`/family/tributes/${id}`, { status })

			// Optimistic update or fetch again
			setTributes(tributes.map((t) => (t.id === id ? { ...t, status } : t)))

			if (status === 'APPROVED') {
				toast.success('Homenagem aprovada com sucesso!')
			} else {
				toast.success('Homenagem rejeitada.')
			}
		} catch (error) {
			console.error('Erro ao atualizar status:', error)
			toast.error('Erro ao atualizar homenagem.')
		}
	}

	const handleDelete = async (id) => {
		if (window.confirm('Tem certeza que deseja excluir esta homenagem?')) {
			try {
				await api.delete(`/family/tributes/${id}`)
				setTributes(tributes.filter((t) => t.id !== id))
				toast.success('Homenagem excluída com sucesso!')
			} catch (error) {
				console.error('Erro ao excluir homenagem:', error)
				toast.error('Erro ao excluir homenagem.')
			}
		}
	}

	if (loading) {
		return (
			<div
				style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}
			>
				<Loader />
			</div>
		)
	}

	return (
		<TabContainer>
			<TabTitle>
				{type === 'pending' ? 'Mensagens Pendentes' : 'Mensagens Aprovadas'}
			</TabTitle>
			<TributesList>
				{currentTributes.length > 0 ? (
					currentTributes.map((tribute) => (
						<div key={tribute.id} style={{ marginBottom: '1rem' }}>
							<TributeCard
								name={tribute.author_name || tribute.sender_name}
								relationship={
									tribute.kinship || tribute.relationship || 'Visitante'
								}
								message={tribute.message}
								avatarColor={tribute.avatar_color}
								showActions={true}
								onApprove={
									type === 'pending'
										? () => handleStatusUpdate(tribute.id, 'APPROVED')
										: null
								}
								onReject={
									type === 'pending'
										? () => handleStatusUpdate(tribute.id, 'REJECTED')
										: null
								}
								onDelete={
									type === 'approved' ? () => handleDelete(tribute.id) : null
								}
							/>
						</div>
					))
				) : (
					<EmptyMessage>
						Nenhuma mensagem {type === 'pending' ? 'pendente' : 'aprovada'}.
					</EmptyMessage>
				)}
			</TributesList>

			{filteredTributes.length > itemsPerPage && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			)}
		</TabContainer>
	)
}
