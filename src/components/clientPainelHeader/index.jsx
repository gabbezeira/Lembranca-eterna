import { Button } from '@components'
import {
	FileText,
	Image,
	MessageSquare,
	MessageSquareDashed,
} from 'lucide-react'
import { Container, HeaderContainer, Title, UserName } from './styles'

export const ClientPainelHeader = ({ activeTab, onTabChange, userName }) => {
	return (
		<Container>
			<HeaderContainer>
				<div style={{ width: '100%', marginBottom: '2rem' }}>
					<Title>
						Olá, <UserName>{userName || 'Visitante'}</UserName>
					</Title>
				</div>

				<div className="tabs">
					<Button
						variant={activeTab === 'info' ? 'primary' : 'outline'}
						onClick={() => onTabChange('info')}
						width="100%"
					>
						<FileText size={20} />
						Informações
					</Button>

					<Button
						variant={activeTab === 'media' ? 'primary' : 'outline'}
						onClick={() => onTabChange('media')}
						width="100%"
					>
						<Image size={20} />
						Midias
					</Button>

					<Button
						variant={activeTab === 'pending' ? 'primary' : 'outline'}
						onClick={() => onTabChange('pending')}
						width="100%"
					>
						<MessageSquareDashed size={20} />
						Homenagens pendentes
					</Button>

					<Button
						variant={activeTab === 'approved' ? 'primary' : 'outline'}
						onClick={() => onTabChange('approved')}
						width="100%"
					>
						<MessageSquare size={20} />
						Homenagens aprovadas
					</Button>
				</div>
			</HeaderContainer>
		</Container>
	)
}
