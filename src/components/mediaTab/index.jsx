import { Button, Loader } from '@components'
import { Image as ImageIcon, Trash2, Video } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'
import {
	ButtonRow,
	DeleteButton,
	EmptyState,
	HiddenInput,
	InfoText,
	LoadingWrapper,
	MediaGrid,
	MediaItem,
	Section,
	SectionHeader,
	TabContainer,
	TabTitle,
	UploadingPlaceholder,
} from './styles'

export const MediaTab = () => {
	const [mediaList, setMediaList] = useState([])
	const [loading, setLoading] = useState(true)
	const [uploadingType, setUploadingType] = useState(null)
	const photoInputRef = useRef(null)
	const videoInputRef = useRef(null)

	const fetchMedia = async () => {
		try {
			const response = await api.get('/family/media')
			setMediaList(response.data)
		} catch (error) {
			console.error('Erro ao buscar mídia:', error)
			toast.error('Erro ao carregar galeria.')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchMedia()
	}, [])

	const photos = mediaList.filter((m) => m.type === 'PHOTO')
	const videos = mediaList.filter((m) => m.type === 'VIDEO')

	const MAX_PHOTOS = 4
	const MAX_VIDEOS = 4

	const handleFileSelect = (type) => {
		if (type === 'PHOTO') {
			if (photos.length >= MAX_PHOTOS) {
				toast.warning(`Limite de ${MAX_PHOTOS} fotos atingido!`)
				return
			}
			if (photoInputRef.current) photoInputRef.current.click()
		} else if (type === 'VIDEO') {
			if (videos.length >= MAX_VIDEOS) {
				toast.warning(`Limite de ${MAX_VIDEOS} vídeos atingido!`)
				return
			}
			if (videoInputRef.current) videoInputRef.current.click()
		}
	}

	const handleFileChange = async (e, type) => {
		const file = e.target.files[0]
		if (!file) return

		if (type === 'VIDEO' && file.size > 50 * 1024 * 1024) {
			toast.error('O vídeo deve ter no máximo 50MB.')
			return
		}

		const formData = new FormData()
		formData.append('file', file)
		formData.append('type', type)

		try {
			setUploadingType(type)
			await api.post('/family/media', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			await fetchMedia()
			toast.success('Mídia enviada com sucesso!')
		} catch (error) {
			console.error('Erro ao fazer upload:', error)
			const errorMessage =
				error.response?.data?.error || 'Erro ao enviar mídia.'
			toast.error(errorMessage)
		} finally {
			setUploadingType(null)
			if (photoInputRef.current) photoInputRef.current.value = ''
			if (videoInputRef.current) videoInputRef.current.value = ''
		}
	}

	const handleDelete = async (id) => {
		if (window.confirm('Tem certeza que deseja excluir esta mídia?')) {
			try {
				await api.delete(`/family/media/${id}`)
				setMediaList((prev) => prev.filter((m) => m.id !== id))
				toast.success('Mídia excluída com sucesso!')
			} catch (error) {
				console.error('Erro ao excluir:', error)
				toast.error('Erro ao excluir mídia.')
			}
		}
	}

	if (loading) {
		return (
			<LoadingWrapper>
				<Loader />
			</LoadingWrapper>
		)
	}

	return (
		<TabContainer>
			<TabTitle>Galeria de Memórias</TabTitle>

			<HiddenInput
				type="file"
				ref={photoInputRef}
				onChange={(e) => handleFileChange(e, 'PHOTO')}
				accept="image/*"
			/>
			<HiddenInput
				type="file"
				ref={videoInputRef}
				onChange={(e) => handleFileChange(e, 'VIDEO')}
				accept="video/*"
			/>

			{/* Photos Section */}
			<Section>
				<SectionHeader>
					<h4>
						<ImageIcon size={20} />
						Galeria de Fotos
					</h4>
					<span>
						{photos.length} / {MAX_PHOTOS}
					</span>
				</SectionHeader>

				{photos.length > 0 || uploadingType === 'PHOTO' ? (
					<MediaGrid>
						{photos.map((photo) => (
							<MediaItem key={photo.id}>
								<img src={photo.url} alt="Memória" />
								<DeleteButton
									onClick={() => handleDelete(photo.id)}
									title="Excluir foto"
								>
									<Trash2 size={16} />
								</DeleteButton>
							</MediaItem>
						))}
						{uploadingType === 'PHOTO' && (
							<UploadingPlaceholder>
								<Loader />
								<span>Enviando foto...</span>
							</UploadingPlaceholder>
						)}
					</MediaGrid>
				) : (
					<EmptyState>Nenhuma foto adicionada ainda.</EmptyState>
				)}

				<ButtonRow>
					<Button
						variant="outline"
						width="auto"
						disabled={photos.length >= MAX_PHOTOS || uploadingType === 'PHOTO'}
						onClick={() => handleFileSelect('PHOTO')}
					>
						<ImageIcon size={18} />
						{photos.length >= MAX_PHOTOS ? 'Limite Atingido' : 'Adicionar Foto'}
					</Button>
				</ButtonRow>
			</Section>

			{/* Videos Section */}
			<Section>
				<SectionHeader>
					<h4>
						<Video size={20} />
						Galeria de Vídeos
					</h4>
					<span>
						{videos.length} / {MAX_VIDEOS}
					</span>
				</SectionHeader>

				{videos.length > 0 || uploadingType === 'VIDEO' ? (
					<MediaGrid>
						{videos.map((video) => (
							<MediaItem key={video.id}>
								<video src={video.url} controls />
								<DeleteButton
									onClick={() => handleDelete(video.id)}
									title="Excluir vídeo"
								>
									<Trash2 size={16} />
								</DeleteButton>
							</MediaItem>
						))}
						{uploadingType === 'VIDEO' && (
							<UploadingPlaceholder>
								<Loader />
								<span>Enviando vídeo...</span>
							</UploadingPlaceholder>
						)}
					</MediaGrid>
				) : (
					<EmptyState>Nenhum vídeo adicionado ainda.</EmptyState>
				)}

				<ButtonRow>
					<Button
						variant="outline"
						width="auto"
						disabled={videos.length >= MAX_VIDEOS || uploadingType === 'VIDEO'}
						onClick={() => handleFileSelect('VIDEO')}
					>
						<Video size={18} />
						{videos.length >= MAX_VIDEOS
							? 'Limite Atingido'
							: 'Adicionar Vídeo'}
					</Button>
				</ButtonRow>
			</Section>

			<InfoText>
				Cada memorial pode ter até {MAX_PHOTOS} fotos e {MAX_VIDEOS} vídeos para
				compartilhar momentos especiais.
			</InfoText>
		</TabContainer>
	)
}
