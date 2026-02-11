import { Avatar, Container, ActionsContainer, ActionButton } from './styles'
import { Check, Trash2 } from 'lucide-react'

export const TributeCard = ({
	name,
	relationship,
	message,
	avatarColor,
	showActions,
	onApprove,
	onReject,
	onDelete,
}) => {
	const avatarColors = ['#d62a44', '#129cca', '#90EE90', '#dbd031', '#e342e3']

	// Use saved color from DB, or fallback to random for legacy tributes
	const getColor = () => {
		if (avatarColor) return avatarColor
		return avatarColors[Math.floor(Math.random() * avatarColors.length)]
	}

	return (
		<Container>
			<div className="content-wrapper">
				<div className="header">
					<Avatar $avatarColor={getColor()}>{name.charAt(0)}</Avatar>
					<div className="texts">
						<h1 className="name">{name}</h1>
						<p className="relationship">({relationship})</p>
					</div>
				</div>
				<div className="tributeMessage">
					<p className="message">{message}</p>
				</div>
			</div>

			{showActions && (
				<ActionsContainer>
					{onApprove && (
						<ActionButton
							$variant="approve"
							onClick={onApprove}
							title="Aprovar"
						>
							<Check />
						</ActionButton>
					)}
					{onReject && (
						<ActionButton $variant="reject" onClick={onReject} title="Rejeitar">
							<Trash2 />
						</ActionButton>
					)}
					{onDelete && (
						<ActionButton $variant="reject" onClick={onDelete} title="Excluir">
							<Trash2 />
						</ActionButton>
					)}
				</ActionsContainer>
			)}
		</Container>
	)
}
