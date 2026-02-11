import BlueHeart from '@assets/icons/blueHeart.svg'
import { Button, GenericModal } from '@components'
import React, { useState } from 'react'
import { Container } from './styles'

export const TributeModal = ({ isOpen, onClose, onSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		relationship: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [showSuccessModal, setShowSuccessModal] = useState(false)

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (
			!formData.name.trim() ||
			!formData.relationship.trim() ||
			!formData.message.trim()
		) {
			return
		}

		setIsSubmitting(true)

		try {
			await onSubmit(formData)
			setFormData({ name: '', relationship: '', message: '' })
			onClose()
			setShowSuccessModal(true)
		} catch (error) {
			console.error('Erro ao enviar homenagem:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<>
			{isOpen && (
				<Container>
					<div className="overlay" onClick={handleOverlayClick}>
						<div className="modalContent">
							<div className="modalHeader">
								<button className="closeButton" onClick={onClose}>
									×
								</button>
								<h2 className="title">Enviar Homenagem</h2>
								<p className="subtitle">
									Sua homenagem está sujeita a aprovação
								</p>
							</div>

							<form className="form" onSubmit={handleSubmit}>
								<div className="inputGroup">
									<div className="inputField">
										<label className="label" htmlFor="name">
											Nome
										</label>
										<input
											className="input"
											id="name"
											name="name"
											type="text"
											placeholder="Digite seu nome"
											value={formData.name}
											onChange={handleInputChange}
											required
										/>
									</div>

									<div className="inputField">
										<label className="label" htmlFor="relationship">
											Parentesco
										</label>
										<input
											className="input"
											id="relationship"
											name="relationship"
											type="text"
											placeholder="Ex: Filho, Mãe, Amigo..."
											value={formData.relationship}
											onChange={handleInputChange}
											required
										/>
									</div>
								</div>

								<div className="inputField">
									<label className="label" htmlFor="message">
										Mensagem
									</label>
									<textarea
										className="textarea"
										id="message"
										name="message"
										placeholder="Escreva sua mensagem de homenagem..."
										value={formData.message}
										onChange={handleInputChange}
										required
									/>
								</div>

								<div className="buttonGroup">
									<button
										type="button"
										className="button secondary"
										onClick={onClose}
									>
										Cancelar
									</button>
									<button
										type="submit"
										className="button primary"
										disabled={
											isSubmitting ||
											!formData.name.trim() ||
											!formData.relationship.trim() ||
											!formData.message.trim()
										}
									>
										{isSubmitting ? (
											<>
												<span>⏳</span>
												Enviando...
											</>
										) : (
											<>Enviar Mensagem</>
										)}
									</button>
								</div>
							</form>
						</div>
					</div>
				</Container>
			)}

			<GenericModal
				isOpen={showSuccessModal}
				onClose={() => setShowSuccessModal(false)}
				image={BlueHeart}
				imageAlt="Coração de Agradecimento"
				title="Homenagem Enviada!"
				subtitle="Assim que aprovada pela família, sua homenagem irá aparecer no perfil de seu ente querido."
			>
				<div className="buttonGroup">
					<Button
						variant="primary"
						className="button primary"
						onClick={() => setShowSuccessModal(false)}
					>
						Fechar
					</Button>
				</div>
			</GenericModal>
		</>
	)
}
