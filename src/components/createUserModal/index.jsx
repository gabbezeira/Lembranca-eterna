import { Button } from '@components'
import React, { useEffect, useState } from 'react'
import { phoneMask, formatDateForInput } from '../../utils/masks'
import {
	CloseButton,
	DeceasedGrid,
	DeceasedSection,
	FooterButtonContainer,
	FormContainer,
	GridContainer,
	Input,
	InputGroup,
	Label,
	ModalContainer,
	Overlay,
	SectionTitle,
	Subtitle,
	Title,
	Select,
} from './styles'

export const CreateUserModal = ({ isOpen, onClose, user, onSubmit }) => {
	const [formData, setFormData] = useState({
		responsible: '',
		password: '',
		phone: '',
		email: '',
		deceasedName: '',
		birthDate: '',
		deathDate: '',
		plan: 'free',
		validUntil: '',
	})

	useEffect(() => {
		if (user) {
			setFormData({
				responsible: user.responsible || '',
				password: '',
				phone: phoneMask(user.phone || ''),
				email: user.email || '',
				deceasedName: user.deceasedName || '',
				birthDate: formatDateForInput(user.birthDate || ''),
				deathDate: formatDateForInput(user.deathDate || ''),
				plan: user.plan || 'free',
				validUntil: formatDateForInput(user.validUntil || ''),
			})
		} else {
			setFormData({
				responsible: '',
				password: '',
				phone: '',
				email: '',
				deceasedName: '',
				birthDate: '',
				deathDate: '',
				plan: 'free',
				validUntil: '',
			})
		}
	}, [user, isOpen])

	if (!isOpen) return null

	const handleChange = (e) => {
		const { id, value } = e.target

		let formattedValue = value

		if (id === 'phone') {
			formattedValue = phoneMask(value)
		}

		setFormData((prev) => ({
			...prev,
			[id]: formattedValue,
		}))
	}

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (onSubmit) {
			onSubmit(formData)
		}
	}

	return (
		<Overlay onClick={handleOverlayClick}>
			<ModalContainer>
				<CloseButton onClick={onClose} type="button">
					×
				</CloseButton>
				<ModalHeader>
					<Title>{user ? 'Editar Usuário' : 'Criar Usuário'}</Title>
					<Subtitle>
						{user
							? 'Edite as informações do usuário'
							: 'Preencha todas as informações do usuário'}
					</Subtitle>
				</ModalHeader>

				<FormContainer onSubmit={handleSubmit}>
					<GridContainer>
						<InputGroup>
							<Label htmlFor="responsible">Responsável</Label>
							<Input
								type="text"
								id="responsible"
								placeholder=""
								required
								value={formData.responsible}
								onChange={handleChange}
							/>
						</InputGroup>
						<InputGroup>
							<Label htmlFor="password">Senha</Label>
							<Input
								type="password"
								id="password"
								placeholder={user ? 'Deixe em branco para manter' : ''}
								required={!user}
								value={formData.password}
								onChange={handleChange}
							/>
						</InputGroup>
					</GridContainer>

					<GridContainer>
						<InputGroup>
							<Label htmlFor="phone">Telefone</Label>
							<Input
								type="tel"
								id="phone"
								placeholder=""
								required
								value={formData.phone}
								onChange={handleChange}
							/>
						</InputGroup>
						<InputGroup>
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								id="email"
								placeholder=""
								required
								value={formData.email}
								onChange={handleChange}
							/>
						</InputGroup>
					</GridContainer>

					<GridContainer>
						<InputGroup>
							<Label htmlFor="plan">Plano</Label>
							<Select
								id="plan"
								value={formData.plan}
								onChange={handleChange}
							>
								<option value="free">Free (4 Fotos, 4 Vídeos)</option>
								<option value="premium">Premium (8 Fotos, 8 Vídeos)</option>
							</Select>
						</InputGroup>
						<InputGroup>
							<Label htmlFor="validUntil">Data de Validade</Label>
							<Input
								type="date"
								id="validUntil"
								value={formData.validUntil}
								onChange={handleChange}
								disabled={formData.plan === 'free'}
								required={formData.plan === 'premium'}
							/>
						</InputGroup>
					</GridContainer>

					<DeceasedSection>
						<SectionTitle>Dados do Falecido</SectionTitle>
						<DeceasedGrid>
							<InputGroup>
								<Label htmlFor="deceasedName">Nome</Label>
								<Input
									type="text"
									id="deceasedName"
									placeholder=""
									required
									value={formData.deceasedName}
									onChange={handleChange}
								/>
							</InputGroup>
							<InputGroup>
								<Label htmlFor="birthDate">Nascimento</Label>
								<Input
									type="date"
									id="birthDate"
									required
									value={formData.birthDate}
									onChange={handleChange}
								/>
							</InputGroup>
							<InputGroup>
								<Label htmlFor="deathDate">Falecimento</Label>
								<Input
									type="date"
									id="deathDate"
									required
									value={formData.deathDate}
									onChange={handleChange}
								/>
							</InputGroup>
						</DeceasedGrid>
					</DeceasedSection>

					<FooterButtonContainer>
						<Button type="submit" variant="primary">
							{user ? 'Salvar alterações' : 'Criar usuário'}
						</Button>
					</FooterButtonContainer>
				</FormContainer>
			</ModalContainer>
		</Overlay>
	)
}
