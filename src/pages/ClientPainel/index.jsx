import {
	Button,
	ClientPainelHeader,
	Footer,
	MediaTab,
	Menu,
	TributesTab,
	Loader,
} from '@components'
import { UnlockedPageWrapper } from '@globalStylesJSX'
import { Save, Camera } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '@contexts/AuthContext'
import api from '@services/api'
import defaultProfileImage from '@assets/placeholders/perfilphotoplaceholders.webp'
import {
	Container,
	FormSection,
	InputArea,
	PhotoUploadArea,
	SectionTitle,
	MenuWrapper,
	ButtonContainer,
	AvatarContainer,
	AvatarImage,
	AvatarOverlay,
	UploadLabel,
	LoadingWrapper,
	HiddenInput,
	Input,
	GridContainer,
} from './styles'

export function ClientPainel() {
	const [activeTab, setActiveTab] = useState('info')
	const [profileMessage, setProfileMessage] = useState('')
	const [profileImage, setProfileImage] = useState(null)
	const [loading, setLoading] = useState(true)
	const [memorialCode, setMemorialCode] = useState(null)
	const [responsibleName, setResponsibleName] = useState('')
	const [deceasedName, setDeceasedName] = useState('')
	const [birthDate, setBirthDate] = useState('')
	const [deathDate, setDeathDate] = useState('')
	const [userPlan, setUserPlan] = useState('free')

	const { logout } = useAuth()

	useEffect(() => {
		const fetchMemorial = async () => {
			try {
				const response = await api.get('/family/me')
				const { bio, profile_image_url, code, responsible, plan, deceased_name, birth_date, death_date } = response.data
				setProfileMessage(bio || '')
				setProfileImage(profile_image_url || null)
				setMemorialCode(code)
				setResponsibleName(responsible || 'Visitante')
				setDeceasedName(deceased_name || '')
				
				// format dates to YYYY-MM-DD for input
				const formatForInput = (d) => {
					if (!d) return ''
					if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d
					const date = new Date(d)
					if (isNaN(date.getTime())) return ''
					return date.toISOString().split('T')[0]
				}
				setBirthDate(formatForInput(birth_date))
				setDeathDate(formatForInput(death_date))
				
				setUserPlan(plan || 'free')
			} catch (error) {
				console.error('Erro ao buscar memorial:', error)
				toast.error('Erro ao carregar informações do perfil.')
			} finally {
				setLoading(false)
			}
		}
		fetchMemorial()
	}, [])

	const handleTabChange = (tab) => {
		setActiveTab(tab)
	}

	const handleUpdateInfo = async () => {
		try {
			await api.put('/family/profile', {
				bio: profileMessage,
				responsible: responsibleName,
				deceasedName,
				birthDate,
				deathDate,
			})
			toast.success('Informações atualizadas com sucesso!')
		} catch (error) {
			console.error('Erro ao atualizar:', error)
			toast.error('Erro ao atualizar informações.')
		}
	}

	const handleLogout = async () => {
		try {
			await logout()
			toast.success('Logout realizado com sucesso!')
		} catch (error) {
			console.error('Erro ao fazer logout:', error)
			toast.error('Erro ao sair.')
		}
	}

	const handleShare = () => {
		if (memorialCode) {
			const link = `${window.location.origin}/memorial/${memorialCode}`
			navigator.clipboard.writeText(link)
			toast.success('Link do memorial copiado!')
		} else {
			toast.error('O código do memorial ainda não está carregado.')
		}
	}

	const handleSupport = () => {
		const message = 'Olá, preciso de ajuda com o Memorial.'
		const phoneNumber = '5511999999999'
		const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
		window.open(link, '_blank')
	}

	if (loading) {
		return (
			<UnlockedPageWrapper>
				<LoadingWrapper>
					<Loader />
				</LoadingWrapper>
			</UnlockedPageWrapper>
		)
	}

	return (
		<UnlockedPageWrapper>
			<MenuWrapper>
				<Menu
					userType="family"
					position="relative"
					onLogout={handleLogout}
					onShare={handleShare}
					onSupport={handleSupport}
				/>
			</MenuWrapper>
			<Container>
				<ClientPainelHeader
					activeTab={activeTab}
					onTabChange={handleTabChange}
					userName={responsibleName}
				/>

				{activeTab === 'info' && (
					<FormSection>
						<SectionTitle>Dados do Falecido</SectionTitle>

						<PhotoUploadArea>
							<HiddenInput
								type="file"
								id="profileImageInput"
								accept="image/*"
								onChange={async (e) => {
									const file = e.target.files[0]
									if (!file) return

									const formData = new FormData()
									formData.append('file', file)

									try {
										setLoading(true)
										const response = await api.post(
											'/family/profile-image',
											formData,
											{
												headers: { 'Content-Type': 'multipart/form-data' },
											},
										)
										setProfileImage(response.data.url)
										toast.success('Foto de perfil atualizada!')
									} catch (error) {
										console.error('Erro ao enviar foto:', error)
										toast.error('Erro ao atualizar foto de perfil.')
									} finally {
										setLoading(false)
									}
								}}
							/>

							<div
								onClick={() =>
									document.getElementById('profileImageInput').click()
								}
							>
								<AvatarContainer>
									<AvatarImage
										src={profileImage || defaultProfileImage}
										alt="Foto de perfil"
										onError={(e) => {
											e.target.onerror = null
											e.target.src = defaultProfileImage
										}}
									/>
									<AvatarOverlay className="overlay">
										<Camera size={24} />
										<span>Alterar</span>
									</AvatarOverlay>
								</AvatarContainer>
							</div>
							<UploadLabel>Clique na foto para alterar</UploadLabel>
						</PhotoUploadArea>

						<GridContainer>
							<InputArea>
								<label htmlFor="responsibleName">Responsável pela Conta</label>
								<Input
									type="text"
									id="responsibleName"
									value={responsibleName}
									onChange={(e) => setResponsibleName(e.target.value)}
								/>
							</InputArea>
							<InputArea>
								<label htmlFor="deceasedName">Nome do Entes Querido</label>
								<Input
									type="text"
									id="deceasedName"
									value={deceasedName}
									onChange={(e) => setDeceasedName(e.target.value)}
								/>
							</InputArea>
							<InputArea>
								<label htmlFor="birthDate">Data de Nascimento</label>
								<Input
									type="date"
									id="birthDate"
									value={birthDate}
									onChange={(e) => setBirthDate(e.target.value)}
								/>
							</InputArea>
							<InputArea>
								<label htmlFor="deathDate">Data de Falecimento</label>
								<Input
									type="date"
									id="deathDate"
									value={deathDate}
									onChange={(e) => setDeathDate(e.target.value)}
								/>
							</InputArea>
						</GridContainer>

						<InputArea>
							<label htmlFor="profileMessage">Mensagem do Perfil</label>
							<textarea
								id="profileMessage"
								value={profileMessage}
								onChange={(e) => setProfileMessage(e.target.value)}
								rows={6}
							/>
						</InputArea>

						<ButtonContainer>
							<Button
								variant="primary"
								onClick={handleUpdateInfo}
								width="300px"
							>
								<Save size={20} />
								Atualizar Informações
							</Button>
						</ButtonContainer>
					</FormSection>
				)}

				{activeTab === 'media' && (
					<FormSection>
						<MediaTab plan={userPlan} />
					</FormSection>
				)}

				{activeTab === 'pending' && (
					<FormSection>
						<TributesTab type="pending" />
					</FormSection>
				)}

				{activeTab === 'approved' && (
					<FormSection>
						<TributesTab type="approved" />
					</FormSection>
				)}
			</Container>
			<Footer />
		</UnlockedPageWrapper>
	)
}
