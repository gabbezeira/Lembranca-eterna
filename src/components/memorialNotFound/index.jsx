import brokenHeart from '../../assets/icons/broken_heart.svg'
import { ActionButton, Container, Image, Message, Title } from './styles'

export const MemorialNotFound = () => {
	return (
		<Container>
			<Image src={brokenHeart} alt="Coração Partido" />
			<Title>Memorial não encontrado</Title>
			<Message>
				Infelizmente, não conseguimos encontrar o memorial que você está
				procurando. Verifique se o link está correto ou entre em contato com o
				suporte.
			</Message>
			<ActionButton href="/">Voltar para o Início</ActionButton>
		</Container>
	)
}
