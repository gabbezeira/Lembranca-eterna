import { Container } from './styles'

export const GenericModal = ({
	isOpen,
	onClose,
	title,
	subtitle,
	image,
	imageAlt,
	children,
	showCloseButton = false,
	onOverlayClick,
}) => {
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			if (onOverlayClick) {
				onOverlayClick()
			} else {
				onClose()
			}
		}
	}

	if (!isOpen) return null

	return (
		<Container>
			<div className="overlay" onClick={handleOverlayClick}>
				<div className="modalContent">
					<img className="modalImage" src={image} alt={imageAlt} />
					<div className="modalHeader">
						{showCloseButton && (
							<button className="closeButton" onClick={onClose}>
								×
							</button>
						)}
						{title && <h2 className="title">{title}</h2>}
						{subtitle && <p className="subtitle">{subtitle}</p>}
					</div>

					{children}
				</div>
			</div>
		</Container>
	)
}
