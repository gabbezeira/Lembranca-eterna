import {
	Footer,
	MediaSection,
	MemorialNotFound,
	Menu,
	PerfilCard,
	TributeCard,
	TributeModal,
	Loader,
	Pagination,
	Button,
} from '@components'
import { UnlockedPageWrapper } from '@globalStylesJSX'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import { Container, TributesHeader } from './styles'

export function PerfilPage() {
	const { code } = useParams()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [memorial, setMemorial] = useState(null)
	const [loading, setLoading] = useState(true)

	// Data states
	const [mediaItems, setMediaItems] = useState([])
	const [tributes, setTributes] = useState([])

	// Pagination state
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 5

	useEffect(() => {
		const fetchMemorial = async () => {
			try {
				const response = await api.get(`/memorials/${code}`)
				const data = response.data

				setMemorial(data)
				setMediaItems(data.media || [])
				setTributes(data.tributes || [])
			} catch (error) {
				toast.error('Erro ao buscar memorial:', error)
			} finally {
				setLoading(false)
			}
		}

		if (code) {
			fetchMemorial()
		}
	}, [code])

	const videos = mediaItems.filter((item) => item.type === 'VIDEO')
	const photos = mediaItems.filter((item) => item.type === 'PHOTO')

	const openTributeModal = () => setIsModalOpen(true)
	const closeTributeModal = () => setIsModalOpen(false)

	const handleAddTribute = async (newTribute) => {
		try {
			await api.post(`/memorials/${code}/tribute`, {
				message: newTribute.message,
				author_name: newTribute.name,
				relationship: newTribute.relationship,
			})
			toast.success('Homenagem enviada para aprovação!')
			closeTributeModal()
		} catch (error) {
			console.error('Erro ao enviar homenagem:', error)
			toast.error('Erro ao enviar homenagem.')
		}
	}

	const totalPages = Math.ceil(tributes.length / itemsPerPage)
	const currentTributes = tributes.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage,
	)

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

	if (!memorial) {
		return <MemorialNotFound />
	}

	return (
		<UnlockedPageWrapper>
			<Menu
				padding="0rem 10rem"
				$showButton="flex"
				onAddTribute={openTributeModal}
				position="fixed"
			/>
			<Container>
				<PerfilCard
					name={memorial.deceased_name}
					bio={memorial.bio}
					birthDate={memorial.birth_date}
					deathDate={memorial.death_date}
					image={memorial.profile_image_url}
				/>
				<div className="medias">
					{photos.length > 0 && <MediaSection title="Fotos" items={photos} />}
					{videos.length > 0 && <MediaSection title="Vídeos" items={videos} />}
				</div>
				<div className="tributes">
					<TributesHeader>
						<h1 className="title">Homenagens</h1>
						<Button onClick={openTributeModal} variant="primary" width="auto">
							<Plus size={18} />
							Deixar Homenagem
						</Button>
					</TributesHeader>
					{currentTributes.length > 0 ? (
						currentTributes.map((tribute) => (
							<div key={tribute.id} className="items">
								<TributeCard
									name={tribute.author_name}
									relationship={tribute.relationship || 'Visitante'}
									message={tribute.message}
									avatarColor={tribute.avatar_color}
								/>
							</div>
						))
					) : (
						<div className="noTributes">
							<p className="noTributesText">
								Seja o primeiro a deixar uma homenagem.
							</p>
						</div>
					)}

					<div style={{ marginTop: '2rem' }}>
						<Pagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={setCurrentPage}
						/>
					</div>
				</div>
			</Container>
			<Footer />
			<TributeModal
				isOpen={isModalOpen}
				onClose={closeTributeModal}
				onSubmit={handleAddTribute}
			/>
		</UnlockedPageWrapper>
	)
}
