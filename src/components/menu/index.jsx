import { Button } from '@components'
import {
	HelpCircle,
	LogOut,
	MessageCircleHeart,
	Share2,
	UserPlus,
	UserRound,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

export const Menu = ({
	padding,
	onAddTribute,
	showAddMessage,
	position,
	userType,
	onLogout,
	onShare,
	onSupport,
	onCreateUser,
	...props
}) => {
	const renderButtons = () => {
		if (!userType) {
			return (
				<>
					<Button
						className="addMessageButton"
						variant="primary"
						fontWeight="500"
						fontSize="0.875rem"
						showButton={showAddMessage}
						onClick={onAddTribute}
					>
						<MessageCircleHeart className="buttonIcon" />
						<span className="buttonText">Adicionar Homenagem</span>
					</Button>
					<Link className="buttonLink" to="/login">
						<Button variant="primary" fontWeight="500" fontSize="0.875rem">
							<UserRound className="buttonIcon" />
							<span className="buttonText">Área da Família</span>
						</Button>
					</Link>
				</>
			)
		}

		if (userType === 'admin') {
			return (
				<>
					<Button
						variant="primary"
						fontWeight="500"
						fontSize="0.875rem"
						onClick={onCreateUser}
					>
						<UserPlus className="buttonIcon" />
						<span className="buttonText">Novo Usuário</span>
					</Button>
					<Button
						variant="outline"
						fontWeight="500"
						fontSize="0.875rem"
						onClick={onLogout}
					>
						<LogOut className="buttonIcon" />
						<span className="buttonText">Sair</span>
					</Button>
				</>
			)
		}

		if (userType === 'family') {
			return (
				<>
					<Button
						variant="outline"
						fontWeight="500"
						fontSize="0.875rem"
						onClick={onShare}
					>
						<Share2 className="buttonIcon" />
						<span className="buttonText">Compartilhar</span>
					</Button>
					<Button
						variant="outline"
						fontWeight="500"
						fontSize="0.875rem"
						onClick={onSupport}
					>
						<HelpCircle className="buttonIcon" />
						<span className="buttonText">Suporte</span>
					</Button>
					<Button
						variant="primary"
						fontWeight="500"
						fontSize="0.875rem"
						onClick={onLogout}
					>
						<LogOut className="buttonIcon" />
						<span className="buttonText">Sair</span>
					</Button>
				</>
			)
		}
	}

	return (
		<Container $padding={padding} $position={position} {...props}>
			<h1 className="logo">Lembrança Eterna</h1>
			<div className="buttons">{renderButtons()}</div>
		</Container>
	)
}
